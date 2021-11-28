// это файл маршрутов
const router = require('express')
  .Router(); // создали роутер

const {
  celebrate,
  Joi,
} = require('celebrate');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const { isURL } = require('../middlewares/validator');

router.get('/movies', getMovies);

router.post('/movies', celebrate({
  // валидируем параметры
  body: Joi.object()
    .keys({
      country: Joi.string()
        .required(),
      director: Joi.string()
        .required(),
      duration: Joi.number()
        .required(),
      year: Joi.string()
        .required(),
      description: Joi.string()
        .required(),
      image: Joi.string()
        .required()
        .custom(isURL),
      trailer: Joi.string()
        .required()
        .custom(isURL),
      thumbnail: Joi.string()
        .required()
        .custom(isURL),
      movieId: Joi.number()
        .required(),
      nameRU: Joi.string()
        .required(),
      nameEN: Joi.string()
        .required(),
    }),
}), createMovie);

router.delete('/movies/:movieId', celebrate({
  // валидируем параметры
  params: Joi.object()
    .keys({
      movieId: Joi.string()
        .required()
        .length(24)
        .hex(),
    }),
}), deleteMovie);

module.exports = router;
