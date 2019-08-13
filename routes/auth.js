const   express       = require('express'),
        passport      = require('passport'),
        User          = require('../models/users'),
        crypto        = require( 'crypto' ),
        sendMail      = require( "../handlers/sendmail" ),
        router        = express.Router();


// ===Login===
// ---Login Form---
router.get('/login', ( req, res ) => {
  res.render("authorization/login");
});

// ---Login Logic---

router.post('/login', async function( req, res){
  try {
    let username = req.body.username;
    
    let foundUser = await User.findOne({
      username: username,
      isVerified: true,
    });

    if ( foundUser !== null ) {
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: "Welcome back. Did you clear your cookies?",
        failureRedirect: '/login',
        failureFlash: true
      })( req, res );
    } else {
      req.flash( "error", "Please check your email to verify your account");
      res.redirect( '/login' );
    }

  } catch( err ) {
    console.log( err );

    req.flash( "error", err.message );
    res.redirect( '/login' );
  }
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

router.post( '/register' , ( req, res ) => {
  const username = req.body.username,
        first    = req.body.firstName,
        middle   = req.body.middle,
        last     = req.body.last,
        email    = req.body.email;

  const verificationtoken = crypto.randomBytes(20).toString( 'hex' );

  sendMail.sendAccountVerificationEmail( verificationtoken, email )
  .then( message => {
    req.flash( 'success', message.message );
    res.redirect('/');

    let newUser = new User({
      anonymous: false,
      username: username,
      firstName: first,
      middleInitial: middle,
      lastName: last,
      email: email,
      accountVerificationToken: verificationtoken,
      isVerified: false
    });
  
    if( req.body.adminCode === "iamanadmin" ) {
      newUser.isAdmin = true;
    }

    User.register( newUser, req.body.password, ( err ) => {
      if( err ){
        console.log( err );
        return res.render( "authorization/register", { "error": err.message });
      }
    });
  })
  .catch( err => {
    console.log( err );

    req.flash( 'error', message.message );
    res.redirect('/register');
  });
});

router.get( '/register/:verificationtoken', async function( req, res ){
  try {
    let accountVerificationToken = req.params.verificationtoken;
    let foundUser = await User.findOneAndUpdate(
      { accountVerificationToken: accountVerificationToken },
      {
        isVerified: true,
        accountVerificationToken: ""
      }
    )

    res.redirect( '/login' )

  } catch( err ) {
    console.log( err );

    req.flash( "error", "It seems there was a problem registering your account with us. Please try again.");
    res.redirect('/register');
  }
});

module.exports = router;