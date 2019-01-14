var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Schema          = mongoose.Schema;


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


// SCHEMAS

//REPORTS SCHEMA

var reportsSchema = new Schema({
  first: String,
  middle: String,
  last: String,
  dob: Date,
  ssn: String,
  primaryPhone: String,
  secondaryPhone: String,
  email: String,
  mailingAddress: String,
  mailingCity: String,
  mailingState: String,
  mailingZip: String,
  incidentType: String,
  incidentLocation: String,
  incidentDate: Date,
  incidentDetails: String,
  createdDate: Date,
  createdByUser: String
});

var Report = mongoose.model("Report",reportsSchema);


// =======================================


//APP SETTINGS & CONFIG

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");


// =======================================


//ROUTES

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

  //Show Page - News

  app.get('/news/:id', function(req,res){
    res.send("news show page");
  });

  //New Page - News

  app.get('/news/new', function(req,res){
    res.send("This is a page for a new news article");
  });

//--------------------------------

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

//--------------------------------

//REPORTS

  //New Report Form Page

  app.get("/reports/new", function(req,res){
    res.render("reports/new-report");
  });

  //New Report Post Page

  app.post('/reports/new', function(req,res){
    var first = req.body.first,
        middle = req.body.middle,
        last = req.body.last,
        dob = req.body.dob,
        ssn = req.body.ssn,
        primaryPhone = req.body.primaryPhone,
        secondaryPhone = req.body.secondaryPhone,
        email = req.body.email,
        mailingAddress = req.body.mailingAddress,
        mailingCity = req.body.mailingCity,
        mailingState = req.body.mailingState,
        mailingZip = req.body.mailingZip,
        incidentType = req.body.incidentType,
        incidentLocation = req.body.incidentLocation,
        incidentDate = req.body.incidentDate,
        incidentDetails = req.body.incidentDetails,
        createdDate = req.body.createdDate,
        createdByUser = req.body.createdByUser;
    var newReport = {
      first: first,
      middle: middle,
      last: last,
      dob: dob,
      ssn: ssn,
      primaryPhone: primaryPhone,
      secondaryPhone: secondaryPhone,
      email: email,
      mailingAddress: mailingAddress,
      mailingCity: mailingCity,
      mailingState: mailingState,
      mailingZip: mailingZip,
      incidentType: incidentType,
      incidentLocation: incidentLocation,
      incidentDate: incidentDate,
      incidentDetails: incidentDetails,
      createdDate: createdDate,
      createdByUser: createdByUser
    }
    Report.create(newReport, function (err, aNewReport) {
      if (err) {
        console.log(err);
        res.redirect('back');
      } else {
        res.redirect('reports/report-index');
      }
    });
  });

  //Index Page - Reports

  app.get('/reports', function(req,res){
    Report.find({}, function callback(err, allReports){
      if (err){
        console.log(err);
      } else {
        res.render("reports/report-index", {reports: allReports});
      }
    });
  });

  //Show Page - Reports

  app.get('/reports/:id', function(req,res){
    res.send("show page for reports");
  });


// =======================================


//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});