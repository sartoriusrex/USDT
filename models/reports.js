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
  author: {
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
});

const Report = mongoose.model("Report",ReportsSchema);

module.exports = Report;

