const express = require("express");
const router = express.Router();

// @Route   GET api/jobs
// @desc    Register a User
// @access  public

router.get("/", (req, res) => {
  res.send("get all jobs");
});

// @Route   POST api/jobs
// @desc    add new kob
// @access  private

router.post("/", (req, res) => {
  res.send("add new jobs");
});

// @Route   PUR api/jobs/:id
// @desc    update job
// @access  private

router.put("/:id", (req, res) => {
  res.send("update  jobs");
});

// @Route   DELETE api/jobs/:id
// @desc    delete job
// @access  private

router.delete("/:id", (req, res) => {
  res.send("delete  jobs");
});

module.exports = router;
