const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');
const router = require('./router');

const port = 3000;
const context = '/demo';
const documentRoot = path.join(__dirname, 'public');
const secret = 'secret';
const serviceUrl = 'http://localhost:3000/demo';

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

router(app, passport);

app.listen(port, () => {
  console.log(`Server URL: ${serviceUrl}`);
});
