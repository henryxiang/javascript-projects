const homeRoute = require('./home-route');
const logoutRoute = require('./logout-route');
const auth = require('../auth');
const context = '/demo'

module.exports = (app, passport) => {
  auth.configure(passport);
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });
  app.use(`${context}/`, auth.authenticate(passport), homeRoute);
  app.use(`${context}/logout`, logoutRoute);
};
