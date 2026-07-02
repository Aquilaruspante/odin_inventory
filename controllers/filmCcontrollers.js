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
    await db.filmCreate(title, year, director, image, genre);
    res.redirect('/');
};