const express = require("express");
const cors = require("cors");
const { registerUserRouter, dataRouter } = require("./routes/routers");
const errorHandlerMiddleWare = require("./utils/errorHandling/errorMiddileware");
const app = express();
module.exports = app;
app.use(express.json());
app.use(cors());
app.use("/api/v1", registerUserRouter);
app.use("/api/v1", dataRouter);
app.use(errorHandlerMiddleWare);
app.all("*", (req, res) => {
  res.status(404).json({ err: "pageNotFound" });
});
