"use strict";
var gulp = require('gulp');
var del = require('del');


gulp.task('copy', ['clean'], function() {

    gulp.src(
        './src/index.html'
    )
    .pipe(gulp.dest('dist'));
});


gulp.task('clean', function() {
    console.log('cleaning...');
    return del('dist/*.js');
}); 



