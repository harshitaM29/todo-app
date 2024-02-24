const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoConnect = require("./util/database").mongoConnect;

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

mongoConnect(() => {
  app.listen(3000);
});
