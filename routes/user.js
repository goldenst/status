const express = require("express");
const router = express.Router();

// @Route   POST api/users
// @desc    Register a User
// @access  public

router.post("/", (req, res) => {
  res.send("User Post");
});

module.exports = router;
