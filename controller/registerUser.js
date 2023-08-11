const userSchema = require("../model/userModel");
const GlobalError = require("../utils/errorHandling/customErrorClass");
const createToken = require("../utils/security/jwtCreation");
const isBadWord = require("../utils/nameValidity/badWordsBlocker/badWordsChecker");
const hasSpecialCharacters = require("../utils/nameValidity/nameRegex/namevalidity");
const registerUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    if (await userSchema.findOne({ name })) throw new Error("userExists");
    else if (isBadWord(name)) {
      throw new Error("noVulgarWordsAllowed");
    } else if (hasSpecialCharacters(name)) {
      throw new Error("noSpecialCharactersAllowed");
    } else if (name.length <= 3 || name.length >= 30) {
      throw new Error("nameLengthNotValid");
    } else {
      console.log("hello");
      const user = await userSchema.create({ name });
      const wholeData = await userSchema.find(
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
          response: "userCreated",
          token,
          data: user,
          leaderBoard: wholeData,
        },
        statusCode: 201,
        stack: null,
      });
    }
  } catch (err) {
    let customErr;
    if (err.message == "userExists") {
      customErr = new GlobalError("fail", err.message, 409);
    } else {
      customErr = new GlobalError("fail", err.message, 422);
    }
    return next(customErr);
  }
};
module.exports = registerUser;
