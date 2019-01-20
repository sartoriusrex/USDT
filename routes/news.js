const   express     = require('express'),
        router      = express.Router(),
        News      = require('../models/news');

// Index Page - News

router.get('/news', ( req,res ) => {
  News.find( {} , ( err, allArticles ) => {
    if(err) {
      console.log( err );
      res.redirect( 'back' );
    } else {
    res.render( "news/news-index", { news: allArticles });
    }
  });
  
});


//New Article Form - News

router.get('/news/new', (req,res) => {
  res.render("news/news-new");
});

// Create Article Page - News



// Edit Article Form - News



// Update News Page - News



//Show Page - News

router.get('/news/:id', (req,res) => {
  res.send("news show page");
});



// Delete Article - News




module.exports = router;