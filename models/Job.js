const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const JobsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
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
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("jobs", JobsSchema);
