const   express    = require('express'),
        router     = express.Router(),
        Comment    = require('../models/comments');

//Index Page - comments

router.get('/announcements', (req,res) => {
  res.send("announcements index page");
});

//New Page - comments

router.get('/announcements/new', (req,res) => {
  res.send('page for new announcements');
});

//Show Page for comments

router.get('/announcements/:id', (req,res) => {
  res.send('show page for an announcement');
});

module.exports = router;