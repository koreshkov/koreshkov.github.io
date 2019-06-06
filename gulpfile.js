'use strict';

const gulp              = require('gulp');
const pug               = require('gulp-pug');
const sourcemaps        = require('gulp-sourcemaps');
const rename            = require('gulp-rename');
const plumber           = require('gulp-plumber');
const gutil             = require('gulp-util');
const sass              = require('gulp-sass');
const postcss           = require('gulp-postcss');
const gulpif            = require('gulp-if');
const watch             = require('gulp-watch');
const browserSync       = require('browser-sync');
const webpack           = require('webpack');
const webpackConfig     = require('./webpack.config');

const projName          = "Vue test";
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

// HTML
gulp.task('html', () => {
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
});

// Styles
gulp.task('styles', () => {
    const processors = [
        require('autoprefixer')({browsers: browserSupport}),
        require('postcss-clearfix')
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
        // .pipe(gulpif(!production, sourcemaps.write('./', {includeContent: false, sourceRoot: conf.css.src})))
        .pipe(gulp.dest('./content/css'))
        .on('error', gutil.log);
});

// scripts
gulp.task('scripts', (callback) => {
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
});

// DEFAULT GULP TASKS
gulp.task('build', gulp.parallel('html', 'styles', 'scripts'));

// server
gulp.task('server', gulp.series('build', () => {
    browserSync({
        logPrefix: gutil.colors.bold.white(projName.toUpperCase()),
        server: {
            baseDir: './'
        },
        startPath: './index.html',
        index: 'index.html',
        open: true,
        directory: true,
        ghostMode: {
            click: true,
            forms: true,
            scroll: true
        },
        online: true
    });
}));

// Watch
gulp.task('watch', gulp.series('server', () => {

    watch(['./scss/**/*.scss'], () => {
        browserSync.notify('Styles updating!');
        gulp.start(['styles'], () => {
            browserSync.reload('*.css');
        });
    });

    watch(['./js/**/*.js'], () => {
        browserSync.notify('Scripts updating!');
        gulp.start(['scripts'], () => {
            browserSync.reload('*.js');
        });
    });

    watch(['./pug/**/*.pug'], () => {
        browserSync.notify('HTML updating!');
        gulp.start(['html'], () => {
            browserSync.reload();
        });
    });
}));