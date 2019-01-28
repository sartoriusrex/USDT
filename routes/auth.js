const   express     = require('express'),
        router      = express.Router();


// Login Routes

// ---Login Form---
router.get('/login', (req, res ) => {
  res.render("authorization/login");;
});

module.exports = router;