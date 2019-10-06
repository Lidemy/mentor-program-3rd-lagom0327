const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const babel = require('gulp-babel');
const uglifyJS = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('css', () => (
  gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename((path) => {
      const pathCopy = path; // for ES-lint no-param-reassign
      pathCopy.basename += '.min';
      pathCopy.extname = '.css';
    }))
    .pipe(gulp.dest('./build/css'))
));

gulp.task('js', () => (
  gulp.src('index.js')
    .pipe(babel())
    .pipe(uglifyJS())
    .pipe(rename((path) => {
      const pathCopy = path; // for ES-lint no-param-reassign
      pathCopy.basename += '.min';
      pathCopy.extname = '.js';
    }))
    .pipe(gulp.dest('./build/js'))
));

gulp.task('default', gulp.parallel('css', 'js'));
