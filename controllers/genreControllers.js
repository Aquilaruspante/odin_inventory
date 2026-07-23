const db = require('../db/queries');

exports.genreListGet = async function genreListGet(req, res, next) {
    try {
        const genres = await db.filmsListByGenreGet();
        return res.render('genres', { genres });
    } catch (error) {
        next(error);
    };  
};