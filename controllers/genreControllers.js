const db = require('../db/queries');

exports.genreListGet = async function genreListGet(req, res, next) {
    const { q } = req.query || '';
    try {
        const genres = await db.filmsListByGenreGet(q);
        return res.render('genres', { genres });
    } catch (error) {
        next(error);
    };  
};