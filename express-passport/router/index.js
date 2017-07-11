const auth = require('../auth');
const homeRoute = require('./home-route');
const userRoute = require('./user-route');
const logoutRoute = require('./logout-route');

const context = '/demo'

module.exports = (app, passport) => {
  auth.configure(passport);

  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });
  app.use(auth.authenticate(passport));
  
  app.use(`${context}/`, homeRoute); 
  app.use(`${context}/user`, userRoute); 
  app.use(`${context}/logout`, logoutRoute);  
};
