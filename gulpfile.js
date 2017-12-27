"use strict";
var gulp = require('gulp');
var del = require('del');

//zipping
var fs = require('fs');
var path = require('path');
var zip = new require('node-zip')();


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

gulp.task('zip', function() {
    console.log('start zipping...');
    
    let distDirPath = path.join(__dirname,'/dist');
    console.log(distDirPath);
    fs.readdir(distDirPath, (err, files) => {

        console.log('zipping following files...');
        files.forEach(singleFile => {

            let filePath = path.join(distDirPath, singleFile);
            console.log(filePath);
            zip.file(singleFile, fs.readFileSync(filePath));
        });

        let data = zip.generate({ base64:false, compression: 'DEFLATE' });
        fs.writeFileSync('./dist/offline-paperwallet.zip', data, 'binary');
    });

});


gulp.task('default', ['clean', 'copy']);
