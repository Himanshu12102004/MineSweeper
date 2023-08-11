const users = require("../model/userModel");
const addAvatar = async (req, res, next) => {
  try {
    console.log(req.body);
    await users.updateOne(
      { _id: req.user._id },
      { $set: { avatar: req.body.avatar } }
    );
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

        data: await users.findById(req.user._id),
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
module.exports = addAvatar;
