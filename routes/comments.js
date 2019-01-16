const   express     = require('express'),
        router      = express.Router(),
        Announcement      = require('../models/comments');

//Index Page - comments

router.get('/announcements', function(req,res){
  res.send("announcements index page");
});

//New Page - comments

router.get('/announcements/new', function(req,res){
  res.send('page for new announcements');
});

//Show Page for comments

router.get('/announcements/:id', function(req,res){
  res.send('show page for an announcement');
});

module.exports = router;