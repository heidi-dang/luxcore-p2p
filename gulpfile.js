'use strict';

var gulp = require('gulp');
var luxcoreTasks = require('luxcore-build');

luxcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
