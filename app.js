var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");
//     mongoose        = require("mongoose");

// mongoose.set("useFindAndModify", false);
// mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
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