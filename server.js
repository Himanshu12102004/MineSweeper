const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config(); // Load environment variables from .env

console.log(process.env.MONGO_URI);
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT ${port}`);
});
