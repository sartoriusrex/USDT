const   express               = require('express'),
        Announcement          = require('../models/announcements'),
        News                  = require('../models/news'),
        Subscriber            = require('../models/subscribers'),
        router                = express.Router();
        sendMail              = require('../handlers/sendmail');

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

router.get( '/index', async function( req, res ){
  let query = req.query.search;
  let foundNews;
  let foundAnnouncements;

  // If there is no query, then search all news and announcments, otherwise search the query

  try {
    if( query.length === 0 ) {
      foundNews = await News.find({})
      .sort({
        dateCreated: -1
      });
  
      foundAnnouncements = await Announcement.find({})
      .sort({
        dateLastUpdate: -1
      });

    } else {
      foundNews = await News.find(
        { $text: { $search : query } },
        { score: { $meta: "textScore" } }
      )
      .sort({
        score: { $meta : "textScore" }
      });
    
      foundAnnouncements = await Announcement.find(
        { $text: { $search : query } },
        { score: { $meta: "textScore" } }
      )
      .sort({
        score: { $meta : "textScore" }
      });
    }

    // Combined the search results into one array

    let results = foundNews.concat( foundAnnouncements );

    // Sort all the results by either dateLastUpdated, if available, or by dateCreated, which all results should have;

    let resultsSorted = results.sort( 
        function( a, b ) {
          let dateSortA;
          let dateSortB;

          a.dateLastUpdate ? 
            dateSortA = a.dateLastUpdate : 
            dateSortA = a.dateCreated;

          b.dateLastUpdate ? 
            dateSortB = b.dateLastUpdate :
            dateSortB = b.dateCreated;

          return dateSortB - dateSortA;
      });

    res.render( 'indexingPage', { results: resultsSorted } );

  } catch( err ) {
    console.log( err );

    req.flash( "error", "A problem occurred with your search. Please try again later.");
    res.redirect("/");
  }
});

router.get( '/comingsoon', ( req, res ) => {
  res.render( 'comingsoon' );
});

router.post( '/subscribe-to-newsletter', ( req, res ) => {
  let email = req.body.subscribeEmail;

  // We add the email to the subscriber model, which is simple a list of emails which must be unique. If there's a duplicate, it will throw an error. Otherwise it will attempt to send an email.

  Subscriber.create(
    { email: email },
    ( err ) => {
      if( err ) {
        console.log( err );

        res.flash( 'error', "That email address is already subscribed to the USDT Newsletter.")

      } else {
        sendMail.subscribeToNewsletter( email )
        .then( message => {
          req.flash( 'success', message.message );
          res.redirect( '/' );
        })
        .catch( err => {
          console.log( err );
          req.flash( 'error', message.message );
          res.redirect( '/' );
        });
      }
    }
  );
});

module.exports = router;