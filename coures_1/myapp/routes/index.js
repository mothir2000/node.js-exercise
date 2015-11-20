var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "This ghliaw's app" });
});

router.get('/users', function(req, res, next) {
    res.json({
        users: ["Mark", "Kitty", "Mary"]
    });
});

router.get('/user/:userid', function(req, res, next) {
  if (req.params['userid'] == "jack") {
      return res.json({
          status: "fail"
      });
  }
  return next();
});

router.get('/user/:userid', function(req, res, next) {
   return res.json({
       user: req.params["userid"]
   });
});

module.exports = router;