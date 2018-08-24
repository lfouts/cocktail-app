var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (typeof req.user === 'undefined') {
    res.send({ id: null });
  } else {
    res.send(req.user.get({ plain: true }));
  }
});

module.exports = router;
