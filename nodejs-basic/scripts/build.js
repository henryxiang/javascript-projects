#!/usr/bin/env node

var gulp = require('gulp');
var babel = require('gulp-babel');
var path = require('path');

var base = path.join(__dirname, '..');
var srcDir = path.join(base, 'src');
var srcFile = srcDir + '/**/*.js';
var outDir = path.join(base, 'build');
var presets = ['es2015', 'stage-0'];

gulp.src(srcFile)
    .pipe(babel({presets: presets}))
    .pipe(gulp.dest(outDir));