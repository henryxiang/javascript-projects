#!/usr/bin/env node

/**
 *  This is a plain old JavaScript to load ES6 modules using babel-register
 */

global.__CLIENT__ = false;
global.__SERVER__ = true;

/** 
 * If the environment variable 'NODE_APP_ENTRY' is set, use it as app entry point.
 * Otherwise, use './src/app.js' as default entry point
*/
var appEntry = process.env.NODE_APP_ENTRY || './src/app';

// Load Babel options
var babelOptions = {
  "presets" : ["es2015",  "stage-0"]
};
require('babel-register')(babelOptions);

// Bootstrap application (written in ES6)
require(appEntry); 
