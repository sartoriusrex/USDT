const   Announcement      = require('../models/announcements');

var middlewareObj = {};


middlewareObj.checkAnnouncementOwnership = (req, res, next) => {
  if ( req.isAuthenticated ) {
    Announcement.findById( req.params.id, (err, foundAnnouncement) => {
      if( err || !foundAnnouncement ) {
        req.flash("error","Announcement not found!");
        res.redirect("back");
      } else {
        if (foundAnnouncement.author.id.equals(req.user._id) || req.user.isAdmin) {
          next();
        } else {
          req.flash("error","You do not have permission to perform action");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "Please Log In.");
    res.redirect("back");
  }
};


module.exports = middlewareObj;