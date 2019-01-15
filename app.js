var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Schema          = mongoose.Schema,
    Report          = require('./models/reports');


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

//--------------------------------

//NEWS
  //Index Page - News

  app.get('/news', function(req,res){
    res.send("index page for news");
  });

  //New Page - News

  app.get('/news/new', function(req,res){
    res.send("This is a page for a new news article");
  });

  //Show Page - News

  app.get('/news/:id', function(req,res){
    res.send("news show page");
  });

//--------------------------------

//ANNOUNCEMENTS
  //Index Page - Announcements

  app.get('/announcements', function(req,res){
    res.send("announcements index page");
  });

  //New Page - Announcements

  app.get('/announcements/new', function(req,res){
    res.send('page for new announcements');
  });

  //Show Page for Announcements

  app.get('/announcements/:id', function(req,res){
    res.send('show page for an announcement');
  });

// =======================================


//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});