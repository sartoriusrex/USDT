const   express           = require('express'),
        router            = express.Router(),
        Announcement      = require('../models/announcements'),
        middleware        = require('../middleware/index');


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

//Create Announcement Post Page

router.post('/announcements', (req,res) => {
  var author = {
      username: req.user.username,
      id: req.user._id
      },
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

// Announcment Show Page

router.get('/announcements/:id', ( req, res ) => {
  Announcement.findById(req.params.id, ( err, foundAnnouncement ) => {
    if ( err || !foundAnnouncement ) {
      console.log( err );
      res.redirect("back");
    } else {
      res.render("announcements/announcement-show", { announcement: foundAnnouncement });
    }
  });
});

//Edit Page for Announcements

router.get('/announcements/:id/edit', middleware.checkAnnouncementOwnership, (req,res) => {
  Announcement.findById(req.params.id, (err, foundAnnouncement) => {
    if (err || !foundAnnouncement) {
      console.log(err);
    } else {
      res.render('announcements/announcement-edit', {announcement: foundAnnouncement});
    }
  });
});

// Update Page for Announcements

router.put('/announcements/:id', (req,res) => {
  var today = new Date(),
      dd    = today.getDate(),
      mm    = today.getMonth() + 1,
      yy    = today.getFullYear(),
      hh    = today.getHours(),
      min   = today.getMinutes();

  var timeNow = yy + " - " + mm + " - " + dd + " at: " + hh + ":" + min;

  var updatedBody = req.body.previousBody + " Updated: " + timeNow + " : " + req.body.appendToBody;

  var updatedAnnouncement = {
    body: updatedBody,
    dateLastUpdate: today,
  };

  Announcement.findByIdAndUpdate(req.params.id, updatedAnnouncement, (err,foundAnnouncement) => {
    if( err || !foundAnnouncement ) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('/announcements');
    }
  });
});

// Delete Route for Announcements

router.delete('/announcements/:id', (req,res) => {
  Announcement.findByIdAndDelete(req.params.id, (err) => {
    if( err ) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('/announcements');
    }
  });
});

module.exports = router;