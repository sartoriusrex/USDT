const   express     = require('express'),
        router      = express.Router(),
        News      = require('../models/news');

// Index Page - News

router.get('/news', function(req,res){
  res.send("index page for news");
});

//New Page - News

router.get('/news/new', function(req,res){
  res.send("This is a page for a new news article");
});

//Show Page - News

router.get('/news/:id', function(req,res){
  res.send("news show page");
});

module.exports = router;