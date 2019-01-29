const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema;

const ReportsSchema = new Schema({
  first: String,
  middle: String,
  last: String,
  dob: Date,
  ssn: String,
  primaryPhone: String,
  secondaryPhone: String,
  email: String,
  mailingAddress: String,
  mailingCity: String,
  mailingState: String,
  mailingZip: String,
  incidentType: String,
  incidentLocation: String,
  incidentDate: Date,
  incidentDetails: String,
  dateCreated: { type: Date, default: Date.now },
  author: String
});

const Report = mongoose.model("Report",ReportsSchema);

module.exports = Report;

