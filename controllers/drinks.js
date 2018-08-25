var express = require('express');
var router = express.Router();
var db = require('../sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.models.Drink.findAll( {
    include: [{
      model: db.models.Rating,
      where: { UserId: req.user.id},
      required: false
    }]
  })
    .then(drinks => res.status(200).send(drinks))
    .catch(error => res.status(400).send(error));
});

router.post('/', function(req, res, next) {
  db.models.Drink.create( {
    name: req.body.name,
    description: req.body.description
  }).then(drink => res.send(drink));
})

module.exports = router;
