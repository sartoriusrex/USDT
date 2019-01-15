const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const newsSchema = new Schema ({
  dateCreated: Date,
  datePosted: Date,
  title: String,
  subheading: String,
  author: String,
  body: String,
  comments: {}
});

const News = mongoose.model("Newsarticle",newsSchema);

module.exports = News;