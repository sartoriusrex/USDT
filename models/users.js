const mongoose    = require('mongoose'),
      Schema      = mongoose.Schema,
      passportLocalMongoose = require("passport-local-mongoose");

const UsersSchema = new Schema ({
  anonymous: Boolean,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isAdmin: {
    type: Boolean,
    default: false
  },
  firstName: String,
  middleInitial: String,
  lastName: String,
  dob: Date,
  primaryContactMethod: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
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
  dateCreated: { type: Date, default: Date.now }
});

UsersSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",UsersSchema);

module.exports = User;