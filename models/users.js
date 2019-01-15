const mongoose    = require('mongoose'),
      Schema      = mongoose.Schema;

const usersSchema = new Schema ({
  anonymous: Boolean,
  firstName: String,
  middleInitial: String,
  lastName: String,
  dob: String,
  primaryContactMethod: String,
  email: String,
  primaryPhone: String,
  secondaryPhone: String,
  mailingAddress: String,
  mailingCity: String,
  mailingState: String,
  ssn: String,
  comments: {},
  reports: {},
  socialMedia: {
    facebook: String,
    instagram: String,
    twitter: String,
    reddit: String,
    medium: String,
    google: String,
    linkedin: String
  },
  maritalStatus: String,
  occupation: String,
  dateCreated: Date
});

const User = mongoose.model("User",usersSchema);

module.exports = User;