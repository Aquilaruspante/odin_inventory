const db = require('../db/queries');

exports.filmListGet = async function filmListGet (req, res) {
    const films = await db.filmListGet();
    res.render('index', { films });
};

exports.filmCreateGet = function filmCreateGet (req, res) {
    res.render('newFilm');
};