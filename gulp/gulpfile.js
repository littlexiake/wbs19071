let gulp = require("gulp");


let app = {
    src:"./node_modules/bootstrap",
    dist:"./node_modules/bootstrap/dist",
    js: [
        './node_modules/bootstrap/js/transition.js',
        './node_modules/bootstrap/js/alert.js',
        './node_modules/bootstrap/js/button.js',
        './node_modules/bootstrap/js/carousel.js',
        './node_modules/bootstrap/js/collapse.js',
        './node_modules/bootstrap/js/dropdown.js',
        './node_modules/bootstrap/js/modal.js',
        './node_modules/bootstrap/js/tooltip.js',
        './node_modules/bootstrap/js/popover.js',
        './node_modules/bootstrap/js/scrollspy.js',
        './node_modules/bootstrap/js/tab.js',
        './node_modules/bootstrap/js/affix.js'
    ],
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
    gulp.src(app.js)
        .pipe(concat("bootstrap.js"))
        .pipe(jsmin())
        .pipe(rename("bootstrap.min.js"))
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

gulp.task("default", gulp.series("copy", "concat", "less"));