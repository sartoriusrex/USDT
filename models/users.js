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
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  accountVerificationToken: String,
  isVerified: false,
  isAdmin: {
    type: Boolean,
    default: false
  },
  firstName: String,
  middleInitial: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
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
  dateCreated: { type: Date, default: Date.now }
});

UsersSchema.plugin( passportLocalMongoose );

const User = mongoose.model( "User", UsersSchema );

module.exports = User;