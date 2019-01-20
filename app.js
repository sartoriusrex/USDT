const express         = require("express"),
      app             = express(),
      bodyParser      = require("body-parser"),
      methodOverride  = require("method-override"),
      mongoose        = require("mongoose"),
      Schema          = mongoose.Schema,
      Report          = require('./models/reports'),
      Announcement    = require('./models/announcements'),
      User            = require('./models/users'),
      News            = require('./models/news'),
      Comment         = require('./models/comments');

// data = [
//   {
//     title: "Test 1",
//     subtitle: "Subtitle 1",
//     author: "Groundhog",
//     coverImage: "/photos/amflag-closeup.jpg",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt a nibh at ultrices. Phasellus finibus mi porttitor volutpat placerat. Ut congue lacus enim, ac egestas tortor commodo non. Quisque maximus, nibh cursus rutrum pellentesque, libero ante interdum metus, et malesuada arcu felis id turpis. Cras a lacus nec enim placerat posuere vel ut ligula. Proin a ante eros. Vestibulum quis ligula id magna lobortis mattis. Aenean eleifend nisi at magna interdum, vitae venenatis magna elementum. Praesent lectus est, viverra tempus finibus non, dapibus lobortis metus. Donec ornare aliquam pulvinar. Pellentesque nisi mauris, consectetur a sagittis at, ornare vel neque. Integer tincidunt vel purus at placerat."
//   },
//   {
//     title: "Test 2",
//     subtitle: "Subtitle 2",
//     author: "Groundhog",
//     coverImage: "/photos/amflag-gray.jpg",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt a nibh at ultrices. Phasellus finibus mi porttitor volutpat placerat. Ut congue lacus enim, ac egestas tortor commodo non. Quisque maximus, nibh cursus rutrum pellentesque, libero ante interdum metus, et malesuada arcu felis id turpis. Cras a lacus nec enim placerat posuere vel ut ligula. Proin a ante eros. Vestibulum quis ligula id magna lobortis mattis. Aenean eleifend nisi at magna interdum, vitae venenatis magna elementum. Praesent lectus est, viverra tempus finibus non, dapibus lobortis metus. Donec ornare aliquam pulvinar. Pellentesque nisi mauris, consectetur a sagittis at, ornare vel neque. Integer tincidunt vel purus at placerat."
//   },
//   {
//     title: "Test 3",
//     subtitle: "Subtitle 3",
//     author: "Groundhog",
//     coverImage: "/photos/amflag-middle.jpg",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt a nibh at ultrices. Phasellus finibus mi porttitor volutpat placerat. Ut congue lacus enim, ac egestas tortor commodo non. Quisque maximus, nibh cursus rutrum pellentesque, libero ante interdum metus, et malesuada arcu felis id turpis. Cras a lacus nec enim placerat posuere vel ut ligula. Proin a ante eros. Vestibulum quis ligula id magna lobortis mattis. Aenean eleifend nisi at magna interdum, vitae venenatis magna elementum. Praesent lectus est, viverra tempus finibus non, dapibus lobortis metus. Donec ornare aliquam pulvinar. Pellentesque nisi mauris, consectetur a sagittis at, ornare vel neque. Integer tincidunt vel purus at placerat."
//   },
// ];

// News.create(data, (err, createdArticle) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("success!");
//   }
// });

// ========================================


// MONGOOSE SETTINGS
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/USDT", {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


// =======================================


//APP SETTINGS & CONFIG

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.locals.moment = require('moment');


// =======================================


//ROUTES

var reportRoutes        = require('./routes/reports')
    announcementRoutes  = require('./routes/announcements'),
    newsRoutes          = require('./routes/news')
    commentRoutes       = require('./routes/comments');

app.use(reportRoutes);
app.use(announcementRoutes);
app.use(newsRoutes);
app.use(commentRoutes);


  //Home

app.get('/', (req,res) => {
  res.render('index');
});

// =======================================


//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});