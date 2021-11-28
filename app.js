const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// Порт
const { PORT, DATA_BASE } = require('./config');

const app = express();
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const helmet = require('helmet');
const router = require('./routes/index');
const NotFoundError = require('./errors/not-found-error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorsConfig = require('./middlewares/errorsConfig');
const { options } = require('./utils/contants');
const { limiter } = require('./middlewares/limiter');

mongoose.connect(DATA_BASE);
app.use('*', cors(options));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(requestLogger);
app.use(limiter);
app.use(router);
app.use((req, res, next) => {
  next(new NotFoundError('Ресурс не найден'));
});
app.use(errorLogger);
app.use(errors());
app.use(errorsConfig);
app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
