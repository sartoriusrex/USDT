var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");
//     mongoose        = require("mongoose");

// mongoose.set("useFindAndModify", false);
// mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

//Routes

app.get('/', function(req,res){
  res.render('index');
});

//Index Page - News

app.get('/news', function(req,res){
  res.send("index page for news");
});

//Show Page - News

app.get('/news/:id', function(req,res){
  res.send("news show page");
});

//Index Page - Announcements

app.get('/announcements', function(req,res){
  res.send("announcements index page");
});

//New Report Page

app.get("/report/new", function(req,res){
  res.send("send a new report");
});

app.listen(3000, function(){
  console.log("listening");
});