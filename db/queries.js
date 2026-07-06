const pool = require('./pool');

/* ---------------------------------- FILMS -------------------------------------*/ 

exports.filmListGet = async function filmListGet () {
    const { rows } = await pool.query(`
            SELECT f.name, f.year, f.image, f.director, g.name as genre
            FROM films as f LEFT JOIN relations ON f.id=relations.film_id 
            LEFT JOIN genres as g ON relations.genre_id=g.id;
        `
    );

    return rows;
};

exports.filmCreate = async function filmCreate (name, year, director, image, genreId) {
    await pool.query(`
        INSERT INTO films (name, year, director, image, genre)
            VALUES
                ($1, $2, $3, $4, $5)
        `, [name, year, director, image, genreId]);
};

exports.filmGet = async function filmGet (id) {
    const { rows } = await pool.query(`SELECT * FROM films WHERE id=$1`, [id]);
    return rows;
};

exports.filmUpdate = async function filmUpdate (id, name, year, image, director, genre) {
    await pool.query(`
        UPDATE films
        SET name=$1, year=$2, image=$3, director=$4, genre=$5
        WHERE id=$6;    
    `, [name, year, image, director, genre, id]);
};

exports.filmDelete = async function filmDelete (id) {
    await pool.query('DELETE FROM films WHERE id=$1', [id]);
};

exports.getFilmIdByName = async function getFilmIdByName(name) {
    const { rows } = await pool.query('SELECT id FROM films WHERE name=$1', [name]);
    return rows[0].id;
};

/*-----------------------------GENRES-----------------------------*/

exports.genreGetIdFromName = async function genreGetIdFromName(name) {
    const { rows } = await pool.query(`SELECT id FROM genres WHERE name='${name}';`);
    return rows;
};


/* ------------------------ RELATIONS-------------------------*/

exports.relationCreate = async function relationCreate(filmId, genreId) {
    await pool.query('INSERT INTO relations (film_id, genre_id) VALUES ($1, $2)', [filmId, genreId]);
}