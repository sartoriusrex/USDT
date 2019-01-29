const   express     = require('express'),
        router      = express.Router(),
        Report      = require('../models/reports');

//Index Page - Reports

router.get('/reports', (req,res) => {
  Report.find({}, (err, allReports) => {
    if (err){
      console.log(err);
    } else {
      res.render("reports/report-index", {report: allReports});
    }
  });
});

//New Report Form Page

router.get("/reports/new", (req,res) => {
  res.render("reports/report-new");
});

//New Report Post Page

router.post('/reports', (req,res) => {
  var first = req.body.first,
      middle = req.body.middle,
      last = req.body.last,
      email = req.body.email,
      incidentType = req.body.incidentType,
      incidentLocation = req.body.incidentLocation,
      incidentDate = req.body.incidentDate,
      incidentDetails = req.body.incidentDetails,
      author = {
        username: req.user.username,
        id: req.user._id
      };
  var newReport = {
    first: first,
    middle: middle,
    last: last,
    email: email,
    incidentType: incidentType,
    incidentLocation: incidentLocation,
    incidentDate: incidentDate,
    incidentDetails: incidentDetails,
    author: author
  };
  Report.create(newReport, (err, aNewReport) => {
    if (err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('reports');
    }
  });
});

  //Show Page - Reports

router.get('/reports/:id', (req,res) => {
  Report.findById(req.params.id).exec((err, foundReport) => {
    if (err){
      console.log(err);
    } else {
      res.render("reports/report-show", {report: foundReport});
    }
  });
});

module.exports = router;