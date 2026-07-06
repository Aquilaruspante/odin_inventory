const db = require('../db/queries');

exports.filmListGet = async function filmListGet (req, res) {
    const films = await db.filmListGet();
    res.render('index', { films });
};

exports.filmCreateGet = function filmCreateGet (req, res) {
    res.render('newFilm');
};

exports.filmCreatePost = async function filmCreatePost (req, res) {
    const { title, year, director, image, genre } = req.body;
    
    const genreIds = await db.genreGetIdFromName(genre);
    const { id } = genreIds[0]

    await db.filmCreate(title, year, director, image, id);
    const filmId = await db.getFilmIdByName(title);
    await db.relationCreate(filmId, id);
    res.redirect('/');
};

exports.filmUpdateGet = async function filmUpdateGet (req, res) {
    const { id } = req.params;
    const film = await db.filmGet(id);
    res.render('updateFilm', { film });
}

exports.filmUpdatePost = async function filmUpdatePost (req, res) {
    const { id, title, year, image, director, genre } = req.body;
    await db.filmUpdate(id, title, year, image, director, genre);
    res.redirect('/');
};

exports.filmDelete = async function filmDelete (req, res) {
    const { id } = req.params;
    await db.filmDelete(id);
    res.redirect('/');
};