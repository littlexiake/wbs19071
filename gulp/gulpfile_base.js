let gulp = require("gulp");

gulp.task("hello",function(done) {
    console.log("Hello :)");
    done();
});

gulp.task("hi",function(done) {
    console.log("Hi :)");
    done();
});

gulp.task("default",function(done) {
    console.log("Default :)");
    done();
})


// gulp.task("somejobs",gulp.series("hi","hello"));
gulp.task("somejobs",gulp.series("hello","hi"));