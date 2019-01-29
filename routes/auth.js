const   express     = require('express'),
        passport    = require('passport'),
        User        = require('../models/users'),
        router      = express.Router();


// Login Routes

// ---Login Form---
router.get('/login', ( req, res ) => {
  res.render("authorization/login");
});

// ---Login Logic---

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  successFlash: true,
  failureRedirect: '/login',
  failureFlash: true
}), ( req, res ) => {});

// ---Register Form---
router.get('/register', ( req, res ) => {
  res.render("authorization/register");
});

// ---Register Logic---

router.post('/register', ( req, res ) => {
  var newUser = new User( {
    anonymous: false,
    username: req.body.username,
    firstName: req.body.first,
    middleInitial: req.body.middle,
    lastName: req.body.last,
    dob: req.body.dob,
    ssn: req.body.ssn,
    email: req.body.email,
    primaryPhone: req.body.primaryPhone,
    secondaryPhone: req.body.secondaryPhone,
    mailingAddress: req.body.mailingAddress,
    mailingCity: req.body.mailingCity,
    mailingState: req.body.mailingState
  });

  if(req.body.adminCode = "iamanadmin") {
    newUser.isAdmin = true;
  }

  User.register(newUser, req.body.password, ( err, user ) => {
    if(err){
        console.log(err);
        return res.render("authorization/register",{"error": err.message});
    }
    passport.authenticate("local")(req,res, () => {
        req.flash("success","Thank you for registering, " + user.username);
        res.redirect("/");
    });
});

});

module.exports = router;