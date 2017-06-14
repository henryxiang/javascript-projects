#!/usr/bin/env node

/* 
 * This is the startup script for a Node.js project.
 * It can be run with `npm start` using the default
 * package.json settings.
 * 
 * The script depends on the following npm modules:
 *    webpack
 *    async
 *    live-server
 */

var async = require('async');
var path = require('path');

/* Project root directory */
var base = path.join(__dirname, ".");
var docRoot = base + '/build';

/* A help function to print formatted current timestamp */
var timestamp = function() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

/* Run Webpack in watch mode */
var runWatcher = function() {
  var webpack = require('webpack');
  var conf = require(base + '/webpack.config-dev');
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
  var liveServer = require('live-server');
  var port = 8000;
  var documentRoot = docRoot;
  var params = {
    port: port,
    host: "0.0.0.0",
    root: documentRoot,
    ignore: 'node_modules',
    // file: base + '/dist/index.html',
    wait: 500,
    logLevel: 2 // 0: errors only, 1: some details, 2: verbose
  };
  console.log(timestamp(), 'Starting server');
  liveServer.start(params);
};

/* Start HTTP server and Webpack watcher in parallel */
async.parallel([
  runServer,
  function() { setTimeout(runWatcher, 2000); }
]);
