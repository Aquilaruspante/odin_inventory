const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.send('list of films');
});

router.get('/new', (req, res) => {
    res.send('add film form');
});

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