const pool = require('./pool');

exports.filmListGet = async function filmListGet () {
    const { rows } = await pool.query('SELECT * FROM films;');
    return rows;
};

exports.filmCreate = async function filmCreate (name, year, director, image, genre) {
    await pool.query(`
        INSERT INTO films (name, year, director, image, genre)
            VALUES
                ($1, $2, $3, $4, $5)
        `, [name, year, director, image, genre]);
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