const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const AnnouncementsSchema = new Schema({
  author: String,
  dateCreated: { type: Date, default: Date.now },
  dateLastUpdate: { type: Date, default: Date.now },
  body: String,
});

const Announcement = mongoose.model("Announcement",AnnouncementsSchema);

module.exports = Announcement;