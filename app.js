const express         = require("express"),
      app             = express(),
      bodyParser      = require("body-parser"),
      mongoose        = require("mongoose"),
      Schema          = mongoose.Schema,
      Report          = require('./models/reports'),
      Announcement    = require('./models/announcements'),
      User            = require('./models/users'),
      News            = require('./models/news'),
      Comment         = require('./models/comments');


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