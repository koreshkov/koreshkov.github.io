const gulp              = require('gulp');
const pug               = require('gulp-pug');
const sass              = require('gulp-sass');
const webpack           = require('webpack');
const webpackConfig     = require('./webpack.config');
const browserSync       = require('browser-sync');
const gutil             = require('gulp-util');
const plumber           = require('gulp-plumber');
const gulpif            = require('gulp-if');
const sourcemaps        = require('gulp-sourcemaps');
const rename            = require('gulp-rename');
const postcss           = require('gulp-postcss');
const autoprefixer      = require('autoprefixer');

const production        = process.env.NODE_ENV === 'production' ? true : false;
const browserSupport    = [
    'IE >= 10',
    'IE_mob >= 10',
    'Firefox >= 53',
    'Chrome >= 58',
    'Safari >= 9.1',
    'iOS >= 9',
    'Android >= 4.4'
];

function styles() {
    const processors = [
        autoprefixer({browsers: browserSupport})
    ];

    return gulp.src(['./scss/screen.scss'])
        .pipe(plumber({
            errorHandler: function (err) {
                gutil.log('Filename: ', gutil.colors.bold.red(err.file));
                gutil.log('Linenumber: ', gutil.colors.bold.red(err.line));
                gutil.log('Extract: ', gutil.colors.bold.red(err.message));
                gutil.beep();
                this.emit('end');
            }
        }))
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .pipe(postcss(processors))
        .pipe(rename(function(path){
            path.basename = path.basename + '.min';
        }))
        .pipe(gulp.dest('./content/css'))
        .pipe(browserSync.stream())
        .on('error', gutil.log);
}
gulp.task(styles);

function html() {
    return gulp.src(['./pug/*.pug'])
    .pipe(pug())
    .pipe(plumber({
        errorHandler: function (err) {
            gutil.log('Filename: ', gutil.colors.bold.red(err.file));
            gutil.log('Linenumber: ', gutil.colors.bold.red(err.line));
            gutil.log('Extract: ', gutil.colors.bold.red(err.message));
            gutil.beep();
            this.emit('end');
        }
    }))
    .pipe(gulp.dest('./'))
    .on('error', gutil.log);
}
gulp.task(html);

function scripts(callback) {
    webpack(webpackConfig, function(err, stats) {
        if (err){
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('[webpack:build] Completed\n' + stats.toString({
            assets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            timings: false,
            version: false
        }));

        callback();
    });
}
gulp.task(scripts);

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./pug/**/*.pug', gulp.series('html')).on('change', browserSync.reload);
    gulp.watch(['./js/**/*.js', './js/**/*.vue'], gulp.series('scripts', browserSync.reload));
}
gulp.task(watch);
