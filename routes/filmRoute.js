const { Router } = require('express');
const filmControllers = require('../controllers/filmControllers');

const router = new Router({ mergeParams: true });

router.get('/', filmControllers.filmListGet);

router.get('/new', filmControllers.filmCreateGet);

router.post('/new', filmControllers.filmCreatePost);

router.get('/:id/update', filmControllers.filmUpdateGet);

router.post('/:id/update', filmControllers.filmUpdatePost);

router.post('/:id/delete', filmControllers.filmDelete);

module.exports = router;