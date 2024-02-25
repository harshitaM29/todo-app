const jwt = require("jsonwebtoken");
const User = require("../models/users");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const userInfo = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(userInfo.userId);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false });
  }
};

module.exports = {
  authenticate,
};
