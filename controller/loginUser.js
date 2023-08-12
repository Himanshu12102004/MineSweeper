const users = require("../model/userModel");
const bcrypt = require("bcrypt");
const createToken = require("../utils/security/jwtCreation");
const CustomError = require("../utils/errorHandling/customErrorClass");
const logInUser = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const user = await users.findOne({ name });
    if (!user) {
      throw new Error("noSuchUser");
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const wholeData = await users.find(
          {},
          { name: true, leaderBoardData: true, avatar: true }
        );

        const token = createToken(
          { id: user._id, name: user.name },
          process.env.JWT_SECRET,
          null
        );
        return res.status(201).json({
          success: true,
          err: null,
          status: "success",
          message: {
            response: "loggedIn",
            token,
            data: user,
            leaderBoard: wholeData,
          },
          statusCode: 201,
          stack: null,
        });
      } else {
        throw new Error("noSuchUser");
      }
    }
  } catch (err) {
    const error = new CustomError("fail", err.message, 401);
    next(error);
  }
};
module.exports = logInUser;
