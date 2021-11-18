// это файл маршрутов
const router = require('express')
  .Router(); // создали роутер

const {
  celebrate,
  Joi,
} = require('celebrate');

const {
  findUser,
  updateUser,
} = require('../controllers/users');

// возвращает информацию о пользователе (email и имя)
router.get('/users/me', findUser);

// обновляет информацию о пользователе (email и имя)
router.patch('/users/me', celebrate({
  // валидируем параметры
  body: Joi.object()
    .keys({
      name: Joi.string()
        .required()
        .min(2)
        .max(30),
      about: Joi.string()
        .required()
        .min(2)
        .max(30),
    }),
}), updateUser);

module.exports = router;
