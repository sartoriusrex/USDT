var   mongoose  = require('mongoose'),
      Schema    = mongoose.Schema;

var reportsSchema = new Schema(
  {
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
    createdDate: { type: Date, default: Date.now },
    createdByUser: String
});

var Report = mongoose.model("Report",reportsSchema);

module.exports = Report;

