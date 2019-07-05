const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const JobsSchema = new Schema({
  invoice: {
    type: String
  },
  vehicle: {
    type: String
  },
  jobdesc: {
    type: String
  },
  parts: {
    type: String
  },
  tech: {
    type: String
  },
  promised: {
    type: Date
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model("jobs", JobsSchema);
