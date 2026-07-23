const db = require('../db/queries');
const genreCache = require('../db/genreCache');
const { matchedData, validationResult } = require('express-validator');

exports.filmListGet = async function filmListGet (req, res, next) {
    try {
        const films = await db.filmListGet();
        res.render('index', { films });
    } catch (error) {
        next(error);
    };
};

exports.filmCreateGet = async function filmCreateGet (req, res) {
    const genres = await db.genresListGet();
    res.render('newFilm', { genres, errors: [] });
};

exports.filmCreatePost = async function filmCreatePost (req, res, next) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        try {
            const { title, year, director, image, genre } = matchedData(req);
            await db.filmCreate(title, year, director, image, genre);
            return res.redirect('/');
        } catch (error) {  
            if (error.code === '23505') {
                const genres = await genreCache.getData();
                return res.status(400).render('newFilm', { genres, errors: [{ msg: 'A film with this title already in database!' }]});
            };
            next(error);
        };
    };
    const genres = await genreCache.getData();
    res.render('newFilm', { errors: result.array(), genres });
};

exports.filmUpdateGet = async function filmUpdateGet (req, res, next) {
    const { id } = req.params;
    try {
        const film = await db.filmGet(id);
        const genres = await db.genresListGet();
        res.render('updateFilm', { film, genres, errors: [] });
    } catch (error) {
        next(error);
    };
};

exports.filmUpdatePost = async function filmUpdatePost (req, res, next) {
    const result = validationResult(req);
    const { id } = req.body;

    if (result.isEmpty()) {
        const { title, year, image, director, genre } = matchedData(req);
        try {
            await db.filmUpdate(id, title, year, image, director, genre);
            return res.redirect('/');
        } catch (error) {
            if (error.code === '23505') {
                const film = await db.filmGet(id);
                console.log('film', film);
                const genres = await db.genresListGet();
                return res.render('updateFilm', { errors: { msg: 'A film with this title already in database', film, genres }});
            }
            next(error);
        };
    }
    const film = await db.filmGet(id);
    const genres = await genreCache.getData();
    res.render('updateFilm', { errors: result.array(), film, genres});
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

exports.filmRead = async function filmRead(req, res, next) {
    const { id } = req.params;
    const filmArray = await db.filmGet(id);
    const film = filmArray[0];
    res.render('film', { film });
};