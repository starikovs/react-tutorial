var gulp = require("gulp");
var browserify = require("browserify");
//var babelify = require("babelify");
var uglify = require("gulp-uglify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");

gulp.task("default", function () {
    return browserify("public/scripts/myexample2/myexample2.js")
        .transform("babelify", {presets: ["react"]})
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("public/scripts/myexample2/"));
});

