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


// =======================================


//ROUTES

var reportRoutes    = require('./routes/reports');

app.use(reportRoutes);


  //Home

app.get('/', function(req,res){
  res.render('index');
});

// =======================================


//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});