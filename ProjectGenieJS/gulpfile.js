var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var tsProject = ts.createProject({
    jsx: "react",
    module:"commonjs"
});

gulp.task('scripts', function () {
    var tsResult = gulp.src('js/src/*.tsx')
					.pipe(ts(tsProject));
    return merge([
		tsResult.dts.pipe(gulp.dest('js/out/definitions')),
		tsResult.js.pipe(gulp.dest('js/out'))
    ]);
});
gulp.task('watch', ['scripts'], function () {
    gulp.watch('js/src/*.tsx', ['scripts']);
});