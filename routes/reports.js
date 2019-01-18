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
      author = req.body.createdByUser;
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