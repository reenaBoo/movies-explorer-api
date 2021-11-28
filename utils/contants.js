const options = {
  origin: [
    'http://localhost:3000',
    'https://biba.nomoredomains.rocks',
    'http://biba.nomoredomains.rocks',
    'https://reenaBoo.github.io',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

module.exports = {
  options,
}
