const pool = require('./pool');

let genreCache = null;

async function getGenres() {
    if (genreCache === null) {
        const { rows } = await pool.query('SELECT * FROM genres;');
        genreCache = rows;
    };
    return genreCache;
};

function invalidateGenreCache() {
    genreCache = null;
};

module.exports = { getGenres, invalidateGenreCache };