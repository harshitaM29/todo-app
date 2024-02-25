const express = require("express");

const router = express.Router();

const userController = require("../controller/user");

router.post("/signup", userController.postUserData);

router.post("/login", userController.postLoginUserData);

module.exports = router;
