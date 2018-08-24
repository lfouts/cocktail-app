require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const http = require('http');

const login = require('./login');
const sequelize = require('./sequelize');

const indexController = require('./controllers/index');
const usersController = require('./controllers/users');
const loginController = require('./controllers/login');
const drinksController = require('./controllers/drinks');
const ratingsController= require('./controllers/ratings');

//Initialize our app variable
const app = express();

//Declaring Port
const port = process.env.PORT || 3000;

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "cats" }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexController);
app.use('/users', usersController);
app.use('/auth', loginController);
app.use('/drinks', drinksController);
app.use('/ratings', ratingsController);

app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});
