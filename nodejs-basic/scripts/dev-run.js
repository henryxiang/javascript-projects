#!/usr/bin/env node

var path = require('path');
var base = path.join(__dirname, '..');
var nodemon = require('nodemon');

var srcDir = path.join(base, 'src');
var indexJs = path.join(base, 'index.js');

function timestamp() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

nodemon({
  verbose: false,
  script: indexJs, 
  watch: [srcDir]
});

nodemon
  .on('start', function () {
    console.log(timestamp(), 'App running (Ctrl+C to quit)\n');
  })
  .on('quit', function () {
    console.log(timestamp(), 'App exiting');
    process.exit();
  })
  .on('restart', function (files) {
    console.log(timestamp(), 'Rerunning app due to changes: ', files, '\n');
  });
