var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


var reload = browserSync.reload;



var src = {
    sass: 'sass/**/*.sass',
    css: 'css',
    html: ['Views/**/*.cshtml', '*.html'],
    js: 'js/**/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync({
        server: "./"
    //    startPath: "/",
        ///proxy: "localhost:30807"
    });

    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js /*, ['babel']*/).on('change', function () {
        reload();
    });
});

// Compile sass into CSS
gulp.task('sass', function () {
    return gulp.src(src.sass)
               .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'compressed',
        }))
         .pipe(autoprefixer({
             browsers: ['last 50 versions'],
             cascade: false
         }))
        .pipe(gulp.dest(src.css))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);
