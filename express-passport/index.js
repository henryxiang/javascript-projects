const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');

const port = 3000;
const context = '/demo';
const documentRoot = path.join(__dirname, 'public');
const secret = 'secret';
const casUrl = 'https://cas.ucdavis.edu/cas';
const serviceUrl = 'http://localhost:3000/demo'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({ 
  secret, 
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new (require('passport-cas').Strategy)({
  ssoBaseURL: casUrl,
  serverBaseURL: serviceUrl,
}, function(login, done) {
  return done(null, { id: login.user, name: login.user })
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, { id: id, name: id });
})

const auth = function(req, res, next) {
  passport.authenticate('cas', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      req.session.messages = info.message;
      return res.redirect('/demo');
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      req.session.messages = '';
      return res.redirect('/demo');
    });
  })(req, res, next);
};

app.use(context, [auth, express.static(documentRoot)]);

app.listen(port, () => {
  console.log(`Server URL: ${serviceUrl}`);
});
