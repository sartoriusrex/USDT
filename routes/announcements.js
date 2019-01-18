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
      res.render("announcements/announcement-index", {announcement: allAnnouncements});
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
      body = req.body.body;
  var newAnnouncement = {
    author: author,
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

//Edit Page for Announcements

router.get('/announcements/:id/edit', (req,res) => {
  Announcement.findById(req.params.id, (err, foundAnnouncement) => {
    if (err || !foundAnnouncement) {
      console.log(err);
    } else {
      res.render('announcements/announcement-edit', {announcement: foundAnnouncement});
    }
  });
});

// Update Page for Announcements



// Delete Route for Announcements



module.exports = router;