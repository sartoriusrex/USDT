var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Schema          = mongoose.Schema;


// MONGOOSE SETTINGS
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//REPORTS SCHEMA

var reportsSchema = new Schema({
  first: String,
  middle: String,
  last: String,
  dob: String,
  ssn: String,
  primaryPhone: String,
  secondaryPhone: String,
  email: String,
  mailingAddress: String,
  mailingCity: String,
  mailingState: String,
  mailingZip: String,
  crimeType: String,
  location: String,
  crimeDate: Date,
  crimeDescription: String,
  createdDate: Date,
  createdByUser: String
});

var Report = mongoose.model("Report",reportsSchema);


//APP SETTINGS & CONFIG

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

//ROUTES
  //Home

app.get('/', function(req,res){
  res.render('index');
});

//NEWS
  //Index Page - News

  app.get('/news', function(req,res){
    res.send("index page for news");
  });

  //Show Page - News

  app.get('/news/:id', function(req,res){
    res.send("news show page");
  });

  //New Page - News

  app.get('/news/new', function(req,res){
    res.send("This is a page for a new news article");
  });

//ANNOUNCEMENTS
  //Index Page - Announcements

  app.get('/announcements', function(req,res){
    res.send("announcements index page");
  });

  //No Show Page for Announcements, because they are short

  //New Page - Announcements

  app.get('/announcements/new', function(req,res){
    res.send('page for new announcements');
  });

//REPORTS

  //New Report Page

  app.get("/reports/new", function(req,res){
    res.render("new-report");
  });

  //Index Page - Reports

  app.get('/reports', function(req,res){
    res.send("index page for reports");
  });

  //Show Page - Reports

  app.get('/reports/:id', function(req,res){
    res.send("show page for reports");
  });

//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});