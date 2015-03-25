var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
// Lint Task


// Compile Our Sass
gulp.task('less', function() {
    return gulp.src(['css/**/*.less'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(less({style:'expanded'}))
        .pipe(autoprefixer('last 2 version, ie8, ie9, ie10'))
        //.pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('css/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    //livereload.listen();
    gulp.watch(['css/**/*.less' ], ['less']);
    //gulp.watch(['js/lib/*.js' ]).on('change', livereload.changed);
   
    // gulp.watch('**/*.scss', ['sass']).on('change', livereload.changed);
});

// Default Task
gulp.task('default', ['less', 'watch']);