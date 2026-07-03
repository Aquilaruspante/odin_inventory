const { Router } = require('express');
const filmCcontrollers = require('../controllers/filmCcontrollers');

const router = new Router({ mergeParams: true });

router.get('/', filmCcontrollers.filmListGet);

router.get('/new', filmCcontrollers.filmCreateGet);

router.post('/new', filmCcontrollers.filmCreatePost);

router.get('/:id/update/', filmCcontrollers.filmUpdateGet);

router.post('/:id/update', filmCcontrollers.filmUpdatePost);

router.post('/:id/delete', filmCcontrollers.filmDelete);

module.exports = router;