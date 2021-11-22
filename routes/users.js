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

const { isEmail } = require('../middlewares/validator');

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
      email: Joi.string()
        .custom(isEmail),
    }),
}), updateUser);

module.exports = router;
