const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/user", userRoutes);
mongoose
  .connect(
    "mongodb+srv://harshita:hfBBamGFQiV8m0Va@todo-app.rtwu0cs.mongodb.net/todo?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
