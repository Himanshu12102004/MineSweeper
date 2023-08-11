const users = require("../model/userModel");
const getData = async (req, res, next) => {
  try {
    const wholeData = await users.find(
      {},
      { name: true, leaderBoardData: true, avatar: true }
    );
    res.status(200).json({
      success: true,
      err: null,
      status: "success",
      message: {
        response: "dataSaved",

        data: req.user,
        leaderBoard: wholeData,
      },
      statusCode: 201,
      stack: null,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getData;
