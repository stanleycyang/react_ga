var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  browserify('./build/main.js')
    .transform(reactify)
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['./build/*.js', 'index.html'], ['js']);
});

