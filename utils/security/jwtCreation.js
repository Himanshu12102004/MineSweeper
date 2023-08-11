const jwt = require("jsonwebtoken");
const createToken = (dataToBeEncoded, secret, age) => {
  return jwt.sign(dataToBeEncoded, secret);
};
module.exports = createToken;
