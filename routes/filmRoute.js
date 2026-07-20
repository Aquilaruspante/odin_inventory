const { Router } = require('express');
const filmControllers = require('../controllers/filmControllers');
const { body } = require('express-validator');

const formValidator = [
    body('title').trim()
        .notEmpty().withMessage('Title is required!'),
    body('year').trim()
        .isNumeric().withMessage('Year needs to be a number!'),
    body('director').trim()
        .notEmpty().withMessage('Director required!'),
    body('image').trim()
        .notEmpty().withMessage('Image required!'),
    body('genre')
        .isArray().withMessage('Type at least one genre!')
]

const router = new Router({ mergeParams: true });

router.get('/', filmControllers.filmListGet);

router.get('/new', filmControllers.filmCreateGet);

router.post('/new', formValidator, filmControllers.filmCreatePost);

router.get('/:id/update', filmControllers.filmUpdateGet);

router.post('/:id/update', formValidator, filmControllers.filmUpdatePost);

router.post('/:id/delete', filmControllers.filmDelete);

module.exports = router;