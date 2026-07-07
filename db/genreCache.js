const pool = require('./pool');

let genreCache = null;

async function getData() {
    if (genreCache === null) {
        const { rows } = await pool.query('SELECT * FROM genres;');
        genreCache = rows;
    };
    return genreCache;
};

function invalidateCache() {
    genreCache = null;
};

module.exports = { getData, invalidateCache };