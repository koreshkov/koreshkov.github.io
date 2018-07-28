const gulp = require('gulp');
const gulpif = require('gulp-if');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const webpack = require('webpack');
const webpackConf = require('./webpack.conf');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Configuration

const isProduction = process.env.NODE_ENV === 'production';
const conf = {
    html: {
        src: './pug/',
        dest: './'
    },
    css: {
        src: './scss/',
        dest: './content/css'
    },
    js: {
        src: './js/',
        dest: './content/js'
    }
} 

// HTML

gulp.task('html', function(){
  return gulp.src([`${conf.html.src}**/*.pug`, `!${conf.html.src}layout/**/*.pug`])
    .pipe(pug())
    .pipe(gulp.dest(conf.html.dest))
    .on('end', browserSync.reload)
});

// CSS

gulp.task('css', function(){
  return gulp.src(`${conf.css.src}screen.scss`)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(csso())
    .pipe(gulpif(!isProduction, sourcemaps.write()))
    .pipe(gulp.dest(`${conf.css.dest}`))
    .on('end', browserSync.reload)
});

// JS

gulp.task('js', function(done){
    return webpack(webpackConf, function(err, stats) {
        browserSync.reload();
		done();
	});
});

// Build

gulp.task('build', gulp.parallel('html', 'css', 'js'));

// Serve

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(`${conf.html.src}**/*.pug`, gulp.series('html'));
    gulp.watch(`${conf.css.src}**/*.scss`, gulp.series('css'));
    gulp.watch(`${conf.js.src}**/*.js`, gulp.series('js'));
});

// Default

gulp.task('default', gulp.series('build', 'serve'));