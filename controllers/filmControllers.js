const db = require('../db/queries');
const genreCache = require('../db/genreCache');

exports.filmListGet = async function filmListGet (req, res) {
    const films = await db.filmListGet();
    console.log(films);
    res.render('index', { films });
};

exports.filmCreateGet = async function filmCreateGet (req, res) {
    const genres = await genreCache.getData();
    res.render('newFilm', { genres });
};

exports.filmCreatePost = async function filmCreatePost (req, res) {
    const { title, year, director, image, genre } = req.body;
    await db.filmCreate(title, year, director, image, genre);
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