var express = require('express');
var router = express.Router();
var db = require('../sequelize');

/* GET home page. */
router.post('/', function(req, res, next) {
  let userID = req.user.id;
  let drinkID = req.body.drinkID;
  let getRating = req.body.rating;
  db.models.Rating.findOrCreate({
    where: {UserId: userID, DrinkId: drinkID},
    defaults: {starRating:1},
  }).spread(function (rating, created) {
    console.log(rating.get({ plain: true }));
    rating.set("starRating", getRating);
    rating.save().then(rating => {
      res.send(rating);
    });
  });
});



module.exports = router;
