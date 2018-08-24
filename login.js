var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const db = require('./sequelize');

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.HOST + "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      db.models.User.findOrCreate({
        where: {
          user: profile.id,
          type: 'google'
        },
        defaults: {name: ''}
      }).spread(function(user, created) {
        console.log(user.get({
          plain: true
        }));
        user.set("name", profile.displayName);
        user.save().then(user => {
          return done(null, user);
        });
      });
    }
  )
);

passport.use(
  new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.HOST + "/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      db.models.User.findOrCreate({
        where: {
          user: profile.id,
          type: 'facebook'
        },
        defaults: {name: ''}
      }).spread(function(user, created) {
        console.log(user.get({
          plain: true
        }));
        user.set("name", profile.displayName);
        user.save().then(user => {
          return done(null, user);
        });
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, {
    user: user.user,
    type: user.type
  });
});

passport.deserializeUser(function(user, done) {
  db.models.User.findOne({
    where: user
  }).then(function(u) {
    done(null, u);
  });
});
