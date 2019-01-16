const   express           = require('express'),
        router            = express.Router(),
        Announcement      = require('../models/announcements');


//Index Page - Announcements

router.get('/announcements', (req,res) => {
  Announcement.find({}, (err, allAnnouncements) => {
    if (err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.render("announcements/announcement-index");
    }
  });
});

//New Announcement Form Page

router.get('/announcements/new', (req,res) => {
  res.render('announcements/announcement-new');
});

//New Announcement Post Page

router.post('/announcements', (req,res) => {
  var author = req.body.author,
      dateCreated = req.body.dateCreated,
      dateLastUpdate = req.body.dateLastUpdate,
      body = req.body.body;
  var newAnnouncement = {
    author: author,
    dateCreated: dateCreated,
    dateLastUpdate: dateLastUpdate,
    body: body
  };
  Announcement.create(newAnnouncement, (err, aNewAnnouncement) => {
    if(err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('/announcements');
    }
  });
});

//Show Page for Announcements

router.get('/announcements/:id', (req,res) => {
  res.send('show page for an announcement');
});

module.exports = router;