const db = require('../db/queries');

exports.genreListGet = async function genreListGet(req, res, next) {
    try {
        const genres = await db.filmsListByGenreGet();
        for (const genre of genres) { 
            for (const film of genre.films) console.log(film.name, film.image);
        };

        return res.render('genres', { genres });
    } catch (error) {
        next(error);
    };  
};