const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const CommentsSchema = new Schema ({
  dateCreated: Date,
  title: String,
  author: {
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  body: String,
  parent: String
});

const Comment = mongoose.model("Comment",CommentsSchema);

module.exports = Comment;