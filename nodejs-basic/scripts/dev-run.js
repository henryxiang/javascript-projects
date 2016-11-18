#!/usr/bin/env node

var path = require('path');
var base = path.join(__dirname, '..');
var nodemon = require('nodemon');
var timestamp = require('./utils').timestamp;

var srcDir = path.join(base, 'src');
var indexJs = path.join(base, 'index.js');

nodemon({
  verbose: false,
  script: indexJs, 
  watch: [srcDir]
});

nodemon
  .on('start', function () {
    console.log(timestamp(), 'Starting app (Ctrl+C to quit)\n');
  })
  .on('quit', function () {
    console.log(timestamp(), 'Exiting app');
    process.exit();
  })
  .on('restart', function (file) {
    console.log(timestamp(), 'File modified:\n', file, '\n');
  });
