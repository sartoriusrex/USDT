const   express     = require('express'),
        router      = express.Router(),
        News      = require('../models/news');

// Index Page - News

router.get('/news', (req,res) => {
  res.send("index page for news");
});

//Show Page - News

router.get('/news/:id', (req,res) => {
  res.send("news show page");
});

//New Article Form - News

router.get('/news/new', (req,res) => {
  res.send("This is a page for a new news article");
});

// Create Article Page - News



// Edit Article Form - News



// Update News Page - News



// Delete Article - News




module.exports = router;