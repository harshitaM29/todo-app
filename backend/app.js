const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.listen(4000, () => {
  console.log(`Server is running on port ${port}`);
});
