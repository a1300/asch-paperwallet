"use strict";
var gulp = require('gulp');
var del = require('del');



gulp.task('clean', function() {
    console.log('start cleaning...');
    return del('dist/*');
}); 

gulp.task('copy', function() {
    console.log('start copy...')
    gulp.src(
        './src/index.html'
    )
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['clean', 'copy']);
