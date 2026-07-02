const { Router } = require('express');
const filmCcontrollers = require('../controllers/filmCcontrollers');

const router = new Router();

router.get('/', filmCcontrollers.filmListGet);

router.get('/new', filmCcontrollers.filmCreateGet);

router.post('/new', (req, res) => {
    res.send('adding new film to the database');
});

router.get('/update', (req, res) => {
    res.send('updating film');
});

router.post('update', (req, res) => {
    res.send('update film on the database');
});

router.post('/delete', (req, res) => {
    res.send('delete film');
});

module.exports = router;