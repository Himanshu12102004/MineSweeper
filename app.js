const express = require("express");
const cors = require("cors");
const { signupRouter, dataRouter, loginRouter } = require("./routes/routers");
const errorHandlerMiddleWare = require("./utils/errorHandling/errorMiddileware");
const app = express();
module.exports = app;
app.use(express.json());
app.use(cors());
app.use("/api/v1", signupRouter);
app.use("/api/v1", dataRouter);
app.use("/api/v1", loginRouter);
app.use(errorHandlerMiddleWare);
app.all("*", (req, res) => {
  res.status(404).json({ err: "pageNotFound" });
});
