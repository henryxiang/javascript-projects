const cas = require('passport-cas');
const ssoBaseURL = 'https://cas.ucdavis.edu/cas';
const serverBaseURL = 'http://localhost:3000/demo';

module.exports = (passport) => {
  const passportStrategy = new cas.Strategy(
    { ssoBaseURL, serverBaseURL }, 
    (login, done) => {
      return done(null, { id: login.user, name: login.user })
    }
  );

  passport.use(passportStrategy);

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  })

  return (req, res, next) => {
    passport.authenticate('cas', function (err, user, info) {
      if (err) {
        // return next(err);
        return res.status(401).send('Unauthorized');
      }

      if (!user) {
        req.session.messages = info.message;
        return res.status(401).send('Unauthorized');
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        req.session.messages = '';
        return next();
      });
    })(req, res, next);
  };
};
