const   express     = require('express'),
        router      = express.Router(),
        Announcement      = require('../models/announcements');


//Index Page - Announcements

router.get('/announcements', function(req,res){
  res.send("announcements index page");
});

//New Page - Announcements

router.get('/announcements/new', function(req,res){
  res.send('page for new announcements');
});

//Show Page for Announcements

router.get('/announcements/:id', function(req,res){
  res.send('show page for an announcement');
});

module.exports = router;