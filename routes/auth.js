const express = require("express");
const router = express.Router();

// @Route   GET api/users
// @desc    get loged in User
// @access  private

router.get("/", (req, res) => {
  res.send("get loged in user");
});

// @Route   POST api/users
// @desc    auth User and get Token
// @access  private

router.post("/", (req, res) => {
  res.send("Login User");
});

module.exports = router;
