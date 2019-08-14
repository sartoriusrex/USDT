const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const AnnouncementsSchema = new Schema({
  author: {
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  dateCreated: { type: Date, default: Date.now },
  dateLastUpdate: { type: Date, default: Date.now },
  body: String,
});

AnnouncementsSchema.index({
  "author.username":"text",
  "body":"text",
},{
  weights: {
    author: 2,
    body: 1
  }
});

const Announcement = mongoose.model("Announcement",AnnouncementsSchema);

module.exports = Announcement;