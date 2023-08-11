const users = require("../model/userModel");

const postData = async (req, res, next) => {
  let won = 0;
  try {
    let { mode, points, hasWon, time, date } = req.body;
    mode = mode.toLowerCase();
    console.log(req.body);
    // Create a new GameMode object
    const newGameMode = {
      points: points,
      hasWon: hasWon,
      time: time,
      mode: mode,
      date: date,
    };
    if (hasWon) {
      won = 1;
    }
    console.log("uudcdcbjbdcbsurbfissvsvbs");
    console.log(req.body);
    // Construct the update query
    const updateQuery = {};
    updateQuery[`gamesPlayed.${mode}`] = newGameMode;
    console.log(req.user);
    if (mode === "easy") {
      if (req.user.leaderBoardData.highScores.easy < points)
        await users.updateOne(
          { _id: req.user._id },
          { $set: { "leaderBoardData.highScores.easy": points } }
        );
    }
    if (mode === "medium") {
      if (req.user.leaderBoardData.highScores.medium < points)
        await users.updateOne(
          { _id: req.user._id },
          { $set: { "leaderBoardData.highScores.medium": points } }
        );
    }
    if (mode === "hard") {
      if (req.user.leaderBoardData.highScores.hard < points)
        await users.updateOne(
          { _id: req.user._id },
          { $set: { "leaderBoardData.highScores.hard": points } }
        );
    }

    // Update the user document using $push
    const updatedUser = await users.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: updateQuery,
        $set: { matchesWon: req.user.matchesWon + won },
      },

      { new: true }
    );
    console.log(points, req.user.totalPoints);
    console.log(updatedUser);
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

        data: updatedUser,
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

module.exports = postData;
