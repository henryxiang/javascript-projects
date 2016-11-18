#!/usr/bin/env node

/**
 *  This is a plain old JavaScript to load ES6 modules using babel-register
 */

global.__CLIENT__ = false;
global.__SERVER__ = true;

// Default app entry point
var appEntry = './src/app.js';

// If the environment variable 'NODE_APP_ENTRY' is set, use it as entry point
if (process.env.NODE_APP_ENTRY) {
  appEntry = process.env.NODE_APP_ENTRY;
}

// Load options in .babelrc file
var fs = require('fs');
var babelrc = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(babelrc);

// Start app
require(appEntry);



