#!/usr/bin/env node

var async = require('async');
var path = require('path');

/* Project root directory */
var base = path.join(__dirname, ".");

/* A help function to print formatted current timestamp */
var timestamp = function() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

/* Run Webpack in watch mode */
var runWatcher = function() {
  var webpack = require('webpack');
  var conf = require(base + '/webpack.config');
  var compiler = webpack(conf);

  console.log(timestamp(), "Starting Webpack watcher");
  compiler.watch(
    {
      aggregateTimeout: 300, // wait so long for more changes
      poll: true
    },
    function(err, stats) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(stats.toString("normal"));
    }
  )
};

/* Run development HTTP server */
var runServer = function() {
  var nodemon = require('nodemon');
  var serverStarter = path.join(base, 'src', 'server-starter.js');
  var httpServer = path.join(base, 'src', 'httpServer.js');

  nodemon({
    script: serverStarter,
    watch: [serverStarter, httpServer]
  });

  nodemon.on('start', function () {
    console.log(timestamp(), 'Starting server');
  }).on('quit', function () {
    console.log(timestamp(), 'Shutting down server');
    process.exit();
  }).on('restart', function (files) {
    console.log(timestamp(), 'Restarting server due to changes: ', files);
  });
};

/* Start HTTP server and Webpack watcher in parallel */
async.parallel([
  runServer, 
  function() { setTimeout(runWatcher, 2000); }
]);
