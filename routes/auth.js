const   express     = require('express'),
        passport    = require('passport'),
        User        = require('../models/users'),
        router      = express.Router();


// ===Login===
// ---Login Form---
router.get('/login', ( req, res ) => {
  res.render("authorization/login");
});

// ---Login Logic---

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  successFlash: "Welcome back. Did you clear your cookies?",
  failureRedirect: '/login',
  failureFlash: true
}), ( req, res ) => {
});


// ===Logout===
// Login Logic

router.get("/logout", ( req,res ) => {
  req.logout();
  req.flash("success","Logged Out. We're still watching you, though.");
  res.redirect("/");
});


// ===Register===
// ---Register Form---
router.get('/register', ( req, res ) => {
  res.render("authorization/register");
});

// ---Register Logic---

router.post('/register', ( req, res ) => {

  var username = req.body.username,
      first    = req.body.firstName,
      middle   = req.body.middle,
      last     = req.body.last,
      email    = req.body.email;
  var newUser = new User( {
    anonymous: false,
    username: username,
    firstName: first,
    middleInitial: middle,
    lastName: last,
    email: email,
  });

  if(req.body.adminCode === "iamanadmin") {
    newUser.isAdmin = true;
  }

  User.register(newUser, req.body.password, ( err, user ) => {
    if(err){
        console.log(err);
        return res.render("authorization/register",{"error": err.message});
    }
    passport.authenticate("local")(req,res, () => {
        req.flash("success","Thank you for registering, " + user.username + ". We're watching you.");
        res.redirect("/");
    });
  });

});

module.exports = router;