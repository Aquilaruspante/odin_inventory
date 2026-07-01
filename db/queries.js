const pool = require('./pool');

exports.filmListGet = async function() {
    const { rows } = await pool.query('SELECT * FROM films;');
    return rows;
};