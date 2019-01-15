const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const commentsSchema = new Schema ({
  dateCreated: Date,
  title: String,
  author: String,
  body: String,
  parent: String
});

const Comment = mongoose.model("Comment",commentsSchema);

module.exports = Comment;