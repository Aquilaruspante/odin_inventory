const db = require('../db/queries');
const genreCache = require('../db/genreCache');

exports.filmListGet = async function filmListGet (req, res, next) {
    try {
        const films = await db.filmListGet();
        res.render('index', { films });
    } catch (error) {
        next(error);
    };
};

exports.filmCreateGet = async function filmCreateGet (req, res) {
    const genres = await genreCache.getData();
    res.render('newFilm', { genres });
};

exports.filmCreatePost = async function filmCreatePost (req, res, next) {
    const { title, year, director, image, genre } = req.body;
    try {
        await db.filmCreate(title, year, director, image, genre);
        res.redirect('/');
    } catch (error) {  
        next(error);
    };
};

exports.filmUpdateGet = async function filmUpdateGet (req, res, next) {
    const { id } = req.params;
    try {
        const film = await db.filmGet(id);
        const genres = await db.genresListGet();
        res.render('updateFilm', { film, genres });
    } catch (error) {
        next(error);
    };
};

exports.filmUpdatePost = async function filmUpdatePost (req, res, next) {
    const { id, title, year, image, director, genre } = req.body;
    try {
        await db.filmUpdate(id, title, year, image, director, genre);
        res.redirect('/');
    } catch (error) {
        next(error);
    };
};

exports.filmDelete = async function filmDelete (req, res, next) {
    const { id } = req.params;
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) { 
        try {
            await db.filmDelete(id);
            res.json({ status: 'success', message: 'Record deleted!!!'});
        } catch (error) {
            next(error)
        };
        
    } else {
        res.status(401).json({ status: 'denied', message: 'Action denied!!!'});
    };
};