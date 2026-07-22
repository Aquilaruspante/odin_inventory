const { Router } = requrie('express');

const router = new Router({ mergeParams: true });

router('/', genreControllers.genreListGet);

module.exports = router;
