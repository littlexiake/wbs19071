let gulp = require("gulp");


let app = {
    src:"./node_modules/bootstrap",
    dist:"./node_modules/bootstrap/dist"
}


//复制fonts
gulp.task("copy",function(done) {
    gulp.src(app.src + "/fonts") 
        .pipe(gulp.dest(app.dist))

    gulp.src(app.src + "/fonts/**")
        .pipe(gulp.dest(app.dist + "/fonts"));
    done();
});

//js文件合并压缩
let { default: jsmin } = require("gulp-uglify-es");
let concat = require("gulp-concat");
gulp.task("concat",function(done) {
    gulp.src(`${app.src}/js/*.js`)
        .pipe(concat("bootstrap.js"))
        .pipe(jsmin())
        .pipe(gulp.dest(app.dist + "/js"));
    done();
});


//css文件合并压缩

let less = require("gulp-less");
let cssmin = require("gulp-cssmin");
let rename = require("gulp-rename");

gulp.task("less",function(done) {
    gulp.src(`${app.src}/less/bootstrap.less`)
        .pipe(less())
        .pipe(concat("bootstrap.css"))
        .pipe(cssmin())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest(app.dist + "/css"));
    done();
});
