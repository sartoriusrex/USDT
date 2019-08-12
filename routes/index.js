const   express               = require('express'),
        Announcement          = require('../models/announcements'),
        News                  = require('../models/news'),
        router                = express.Router();
        subscribeToNewsletter  = require('../handlers/sendmail');

//Home

router.get('/', ( req,res ) => {
  Announcement.find({}, ( err, allAnnouncements) => {
    if( err ) {
      console.log( err );
      News.find({}, ( err, allNews ) => {
        if ( err ) {
          console.log ( err );
        } else {
          res.render('index', { announcement: allAnnouncements, news: allNews });
        }
      });
    } else {
      News.find({}, ( err, allNews ) => {
        if ( err ) {
          console.log ( err );
        } else {
          res.render('index', { announcement: allAnnouncements, news: allNews });
        }
      });
    }
  });
});

router.get( '/whoweare', ( req, res ) => {
  res.render( 'about/whoweare' );
});

router.get( '/secoftruth', ( req, res ) => {
  res.render( 'about/secoftruth' );
});

router.get( '/policies', ( req, res ) => {
  res.render( 'about/policies' );
});

router.get( '/faq', ( req, res ) => {
  res.render( 'about/faq' );
});

router.get( '/comingsoon', ( req, res ) => {
  res.render( 'comingsoon' );
});

router.post( '/subscribe-to-newsletter', ( req, res ) => {
  let email = req.body.subscribeEmail;

  subscribeToNewsletter( email )
  .then( message => {
    req.flash( 'success', message.message );
    res.redirect( '/' );
  })
  .catch( err => {
    console.log( err );
    req.flash( 'error', message.message );
    res.redirect( '/' );
  });
});

module.exports = router;