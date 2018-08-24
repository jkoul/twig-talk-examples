
var gulp  = require('gulp');
var dutil = require('./doc-util');
var fonts  = 'fonts';

gulp.task('copy-theme-fonts', function(done) {
  dutil.logMessage(fonts, 'Copying fonts from theme fonts folder');

  var stream = gulp.src('./fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});

gulp.task('copy-uswds-fonts', function (done) {

  dutil.logMessage(fonts, 'Copying fonts from uswds');

  var stream = gulp.src('./node_modules/uswds/src/fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});

gulp.task(fonts, [ 'copy-theme-fonts', 'copy-uswds-fonts' ], function(done) {
  dutil.logMessage(fonts, 'Copying fonts')
})
