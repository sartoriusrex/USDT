var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Schema          = mongoose.Schema,
    Report          = require('./models/reports/reports');


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


//--------------------------------

//REPORTS

//Index Page - Reports

app.get('/reports', function(req,res){
  Report.find({}, function callback(err, allReports){
    if (err){
      console.log(err);
    } else {
      res.render("reports/report-index", {report: allReports});
    }
  });
});

  //New Report Form Page

  app.get("/reports/new", function(req,res){
    res.render("reports/new-report");
  });

  //New Report Post Page

  app.post('/reports', function(req,res){
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
    };
    Report.create(newReport, function (err, aNewReport) {
      if (err) {
        console.log(err);
        res.redirect('back');
      } else {
        res.redirect('reports');
      }
    });
  });

  //Show Page - Reports

  app.get('/reports/:id', function(req,res){
    Report.findById(req.params.id).exec(function callback(err, foundReport){
      if (err){
        console.log(err);
      } else {
        res.render("reports/report-show", {report: foundReport});
      }
    });
  });


// =======================================


//LISTENING ON PORT
app.listen(3000, function(){
  console.log("listening");
});