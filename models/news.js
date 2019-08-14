const mongoose      = require('mongoose'),
      Schema        = mongoose.Schema;

const NewsSchema = new Schema ({
  dateCreated: { type: Date, default: Date.now},
  title: String,
  subtitle: String,
  author: {
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  body: String,
  coverImage: String,
  comments: {}
});

NewsSchema.index({
  "title":"text",
  "subtitle":"text",
  "author.username":"text",
  "body":"text",
},{
  weights: {
    title: 10,
    subtitle: 7,
    author: 5,
    body: 1
  }
});



const News = mongoose.model("Newsarticle", NewsSchema);

module.exports = News;