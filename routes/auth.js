const   express     = require('express'),
        router      = express.Router();


// Login Routes

// ---Login Form---
router.get('/login', ( req, res ) => {
  res.render("authorization/login");;
});

router.get('/register', ( req, res ) => {
  res.render("authorization/register")
});

module.exports = router;