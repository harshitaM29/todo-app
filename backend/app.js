const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/user", userRoutes);
app.use(todoRoutes);
mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
