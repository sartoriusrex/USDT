const   Announcement      = require('../models/announcements'),
        News              = require('../models/news'),
        Comments          = require('../models/comments');

var middlewareObj = {};


middlewareObj.checkAnnouncementOwnership = (req, res, next) => {
  if ( req.isAuthenticated ) {
    Announcement.findById( req.params.id, (err, foundAnnouncement) => {
      if( err || !foundAnnouncement ) {
        req.flash("error","Announcement not found!");
        res.redirect("back");
      } else {
        if ( req.user.isAdmin || foundAnnouncement.author.id.equals(req.user._id) ) {
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

middlewareObj.isLoggedIn = ( req,res,next ) => {
  if( req.isAuthenticated() ) {
      return next();
  }
  req.flash("error","You must register or login to perform that action.");
  res.redirect("/login");
};


module.exports = middlewareObj;