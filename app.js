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

app.listen(3000, function(){
  console.log("listening");
});