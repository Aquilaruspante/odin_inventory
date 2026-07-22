const { Router } = require('express');

const genreControllers = require('../controllers/genreControllers');

const router = new Router({ mergeParams: true });

router.get('/', genreControllers.genreListGet);

module.exports = router;
