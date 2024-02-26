const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateWebToken = (id) => {
  return jwt.sign({ userId: id }, process.env.SECRET_KEY);
};

exports.postUserData = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const salt = await bcrypt.genSalt(10);
    const userData = new User({
      name: name,
      email: email,
      password: await bcrypt.hash(password, salt),
    });
    await userData.save();
    return res.status(201).json(userData);
  } catch (err) {
    return res.status(400).json(err.code);
  }
};

exports.postLoginUserData = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });

  if (user) {
    const presentPass = await bcrypt.compare(password, user.password);

    if (presentPass) {
      res.status(200).json({
        email: email,
        password: password,
        token: generateWebToken(user._id),
      });
    } else {
      res.status(401).json("Password Does Not Match");
    }
  } else {
    res.status(404).json("User Does Not Exists");
  }
};
