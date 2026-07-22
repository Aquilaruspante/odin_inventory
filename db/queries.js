const pool = require('./pool');
const genreCache = require('./genreCache');

/* ---------------------------------- FILMS -------------------------------------*/ 

exports.filmListGet = async function filmListGet () {
    const { rows } = await pool.query(`
            SELECT f.id, f.name, f.year, f.image, f.director, 
            array_agg(g.name) AS genres
            FROM films f 
            LEFT JOIN relations ON f.id = relations.film_id 
            LEFT JOIN genres g ON relations.genre_id = g.id
            GROUP BY f.id, f.name, f.year, f.image, f.director;
                    `
    );

    return rows;
};

exports.filmCreate = async function filmCreate (name, year, director, image, genre) {
    await pool.query(`
        WITH new_film AS (
            INSERT INTO films (name, year, director, image)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        ),
        input_genres AS (
            SELECT unnest($5::text[]) AS name
        ),
        new_genres AS (
            INSERT INTO genres (name)
            SELECT ig.name
            FROM input_genres ig
            LEFT JOIN genres g ON g.name = ig.name
            WHERE g.id IS NULL
            ON CONFLICT (name) DO NOTHING
            RETURNING id, name
        ),
        all_genres AS (
            SELECT id, name FROM genres WHERE name IN (SELECT name FROM input_genres)
            UNION
            SELECT id, name FROM new_genres
        )
        INSERT INTO relations (film_id, genre_id)
        SELECT new_film.id, all_genres.id
        FROM new_film, all_genres;
        `, [name, year, director, image, genre]
    );
};

exports.filmGet = async function filmGet (id) {
    const { rows } = await pool.query('SELECT f.id, f.name, f.year, f.director, f.image, array_agg(g.name) AS genres FROM films as f JOIN relations ON f.id=relations.film_id JOIN genres as g ON relations.genre_id=g.id WHERE f.id=$1 GROUP BY f.id, f.name, f.year, f.director, f.image;', [id]);
    return rows;
};

exports.filmUpdate = async function filmUpdate(id, name, year, image, director, genre) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        await client.query(`
            UPDATE films
            SET name=$1, year=$2, image=$3, director=$4
            WHERE id=$5;
        `, [name, year, image, director, id]);

        await client.query(`
            DELETE FROM relations WHERE film_id = $1;
        `, [id]);

        await client.query(`
            WITH input_genres AS (
                SELECT unnest($2::text[]) AS name
            ),
            new_genres AS (
                INSERT INTO genres (name)
                SELECT ig.name
                FROM input_genres ig
                LEFT JOIN genres g ON g.name = ig.name
                WHERE g.id IS NULL
                ON CONFLICT (name) DO NOTHING
                RETURNING id, name
            ),
            all_genres AS (
                SELECT id, name FROM genres WHERE name IN (SELECT name FROM input_genres)
                UNION
                SELECT id, name FROM new_genres
            )
            INSERT INTO relations (film_id, genre_id)
            SELECT $1, all_genres.id
            FROM all_genres;
        `, [id, genre]);

        await client.query('COMMIT');
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
};

exports.filmDelete = async function filmDelete (id) {
    try {
        await pool.query('DELETE FROM films WHERE id=$1', [id]);
    } catch {
        throw new Error()
    };
};

exports.getFilmIdByName = async function getFilmIdByName(name) {
    const { rows } = await pool.query('SELECT id FROM films WHERE name=$1', [name]);
    return rows[0].id;
};

/* ---------------------------------------------------------GENRES-------------------*/

exports.genresListGet = async function genresListGet() {
    const genres = genreCache.getData();
    return genres;
};