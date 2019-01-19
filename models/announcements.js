const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const announcementsSchema = new Schema({
  author: String,
  dateCreated: { type: Date, default: Date.now },
  dateLastUpdate: { type: Date, default: Date.now },
  body: String,
});

const Announcement = mongoose.model("Announcement",announcementsSchema);

module.exports = Announcement;