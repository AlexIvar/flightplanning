'use strict';

const { src, dest, watch } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
var changed = require('gulp-changed');
const rename = require('gulp-rename');

var SCSS_SRC = './src/Assets/scss/*.scss';
var SCSS_DEST = './src/Assets/css';

function scss(cb) {
  // body omitted
  cb();
}

exports.default = function() {
  return src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

    // All events will be watched

  //  watch(SCSS_SRC, scss);
}

watch(SCSS_SRC, { events: 'all' }, function(cb) {
  // body omitted
  exports.default();
  cb();
});
//Detect changes in SCSS
/*gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});
*/
/*gulp.task('default', ['watch_scss']);*/

/*gulp.task('default', gulp.series('watch_scss', (done) => {
  // CSS changes
  gulp.watch(SCSS_SRC, gulp.series('watch_scss'));
  done();

}));*/
