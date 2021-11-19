const validator = require('validator');

module.exports.isURL = (url) => {
  const validURL = validator.isURL(url, { require_protocol: true });
  if (validURL) {
    return url;
  }
  throw new Error('URL validation err');
};

module.exports.isEmail = (email) => {
  const validEmail = validator.isEmail(email, { require_protocol: true });
  if (validEmail) {
    return email;
  }
  throw new Error('URL validation err');
};
