#!/usr/bin/env node

/**
 *  This is an ES5 JavaScript to load ES6 modules using babel-register
 */

global.__CLIENT__ = false;
global.__SERVER__ = true;

var fs = require('fs');
var babelrc = JSON.parse(fs.readFileSync(__dirname + '/../.babelrc'));

require('babel-register')(babelrc);
require('./HttpServer');