const   express           = require('express'),
        Announcement      = require('../models/announcements'),
        News              = require('../models/news'),
        router            = express.Router();

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
})

module.exports = router;