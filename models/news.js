const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const NewsSchema = new Schema ({
  dateCreated: { type: Date, default: Date.now},
  title: String,
  subtitle: String,
  author: String,
  body: String,
  coverImage: String,
  comments: {}
});

const News = mongoose.model("Newsarticle",NewsSchema);

module.exports = News;