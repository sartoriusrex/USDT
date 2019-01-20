const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const newsSchema = new Schema ({
  dateCreated: { type: Date, default: Date.now},
  title: String,
  subtitle: String,
  author: String,
  body: String,
  coverImage: String,
  comments: {}
});

const News = mongoose.model("Newsarticle",newsSchema);

module.exports = News;