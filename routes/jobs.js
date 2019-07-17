const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validator } = require("express-validator");

const Jobs = require("../models/Job");
const User = require("../models/User");



// @Route   GET api/jobs
// @desc    Register a User
// @access  private
// @Status  Works
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Jobs.find({ user: req.user.id }).sort({
      priorty: 1
    });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @Route   POST api/jobs
// @desc    Create new job
// @access  private
// @Status  Works
router.post("/", (req, res) => {
  const jobs = new Jobs({
    order: req.body.order,
    vehicle: req.body.vehicle,
    jobdesc: req.body.jobdesc,
    parts: req.body.parts,
    tech: req.body.tech,
    promised: req.body.promised,
    status: req.body.status,
    priorty: req.body.priorty
  });
  //console.log(req.body);
  Jobs.create(jobs)
    .then(dbjobs => res.json(dbjobs))
    .catch(err => res.json(err));
});

// @Route   PUT api/jobs/:id
// @desc    update job
// @access  private
// @Status  Works
router.put("/:id", async (req, res) => {
  const { order, vehicle, jobdesc, parts, tech, promised, status, priorty } = req.body;

  const jobFields = {};
  if (order) jobFields.order = order;
  if (vehicle) jobFields.vehicle = vehicle;
  if (jobdesc) jobFields.jobdesc = jobdesc;
  if (parts) jobFields.parts = parts;
  if (tech) jobFields.tech = tech;
  if (promised) jobFields.promised = promised;
  if (status) jobFields.status = status;
  if (priorty) jobFields.priorty = priorty;

  try {
    let jobs = await Jobs.findById(req.params.id);

    if (!jobs) return res.status(404).json({ msg: "Job not found" });

    jobs = await Jobs.findByIdAndUpdate(
      req.params.id,
      { $set: jobFields },
      { new: true }
    );

    res.json(jobs)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @Route   DELETE api/jobs/:id
// @desc    delete job
// @access  private
// @Status  Works
router.delete("/:id", async (req, res) => {
  try {
    const jobs = await Jobs.findById(req.params.id);

    await jobs.remove();
    res.json("Job deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
