const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema;

const ReportsSchema = new Schema({
  first: String,
  middle: String,
  last: String,
  email: String,
  incidentType: String,
  incidentLocation: String,
  incidentDate: Date,
  incidentDetails: String,
  dateCreated: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report",ReportsSchema);

module.exports = Report;

