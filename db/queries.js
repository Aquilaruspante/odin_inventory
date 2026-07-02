const pool = require('./pool');

exports.filmListGet = async function() {
    const { rows } = await pool.query('SELECT * FROM films;');
    return rows;
};

exports.filmCreate = async function (name, year, director, image, genre) {
    await pool.query(`
        INSERT INTO films (name, year, director, image, genre)
            VALUES
                ($1, $2, $3, $4, $5)
        `, [name, year, director, image, genre]);
};