#!/usr/bin/env node

var gulp = require('gulp');
var babel = require('gulp-babel');
var path = require('path');
var timestamp = require('./utils').timestamp;

var base = path.join(__dirname, '..');
var srcDir = 'src';
var srcFile = '/**/*.js';
var outDir = 'build';
var presets = ['es2015', 'stage-0'];

console.log(timestamp(), "Compiling source files: '" + srcDir + srcFile + "'");

gulp.src(path.join(base, srcDir)+srcFile)
    .pipe(babel({presets: presets}))
    .pipe(gulp.dest(path.join(base, outDir)));

console.log(timestamp(), "Finished compiling. Artifacts created in '" + outDir + "' directory.");
