const jwtVerification = require("../utils/security/jwtVerification");
const user = require("../model/userModel");
const jwtController = async (req, res, next) => {
  console.log("rfrhro584");
  try {
    const authentication = req.headers.authentication;
    console.log(authentication);
    if (authentication.startsWith("Bearer")) {
      const jwt = authentication.split(" ")[1];
      const jwtDecoded = await jwtVerification(jwt, process.env.JWT_SECRET);
      console.log(jwtDecoded);
      req.user = await user.findById(jwtDecoded.id);
      console.log(req.user);
      req.data = await user.find({});
    }
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = jwtController;
