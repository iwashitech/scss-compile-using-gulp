const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mode = require('gulp-mode')({
    modes: ["prod", "dev", "stage"],
    default: "dev",
    verbose: false
});
const replace = require('gulp-replace');
const sha1 = require('sha-1');

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(mode.dev(sass({ outputStyle: 'expanded' })))
        .pipe(mode.stage(sass({ outputStyle: 'compressed' })))
        .pipe(mode.prod(sass({ outputStyle: 'compressed' })))
        .pipe(postcss([
            autoprefixer({
                grid: true
            })
        ]))
        .pipe(mode.dev(sourcemaps.write()))
        .pipe(mode.stage(sourcemaps.write()))
        .pipe(gulp.dest('./css/'))
});

gulp.task('cache', function () {
    const now = new Date();
    // const timestamp = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now.getHours()}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;
    const sha1FromDate = sha1(new Date().toISOString());

    return gulp.src([
        './index.html',
    ])
    .pipe(replace(/style\.css.*?"/, `style.css?${sha1FromDate}"`))
    .pipe(gulp.dest('./'))
});

gulp.task('watch-scss', function() {
    gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});
gulp.task('watch-cache', function() {
    gulp.watch(['./css/**/*.css','./sass/**/*.scss'], gulp.task('cache'));
});

gulp.task('default', gulp.parallel('watch-scss', 'watch-cache'));