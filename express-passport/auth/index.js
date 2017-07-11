const cas = require('passport-cas');
const ssoBaseURL = 'https://cas.ucdavis.edu/cas';
const serverBaseURL = 'http://localhost:3000/demo';

const passportStrategy = new cas.Strategy(
  { ssoBaseURL, serverBaseURL }, 
  (login, done) => {
    return done(null, { id: login, name: login })
  }
);

module.exports = {

  configure: (passport) => {
    passport.use(passportStrategy);

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      done(null, { id, name: id });
    });
  },
  
  authenticate: (passport) => {
    return (req, res, next) => {
      passport.authenticate('cas', function (err, user, info) {
        if (err) {
          // return next(err);
          return res.status(403).send('Access forbidden');
        }

        if (!user) {
          req.session.messages = info.message;
          return res.status(401).send('Unauthorized');
        }

        req.logIn(user, function (err) {
          if (err) {
            // return next(err);
            return res.status(401).send('Unauthorized');          
          }

          req.session.messages = '';
          return next();
        });
      })(req, res, next);
    };
  },
  
};
