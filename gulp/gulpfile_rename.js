let gulp = require("gulp");

let app = {
    src: "./src",
    dist: "./dist"
}


//html压缩
let htmlmin = require("gulp-htmlmin");

gulp.task("htmlmin",function(done) {
    gulp.src(`${app.src}/**/*.{html,htm}`)
        .pipe(htmlmin({
            removeComments:true,
            collapseWhitespace:true,
            collapseBooleanAttributes:true,
        }))
        .pipe(gulp.dest(app.dist));
    done();
});

//css压缩

let cssmin = require("gulp-cssmin");

gulp.task("cssmin",function(done) {
    gulp.src(`${app.src}/**/*.css`)
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist));
    done();
});

//js压缩混淆
// let  jsmin = require("gulp-uglify-es");

// gulp.task("jsmin",function(done) {
//     gulp.src(`${app.src}/**/*.js`)
//     .pipe(jsmin.default())
//     .pipe(gulp.dest(app.dist));
// done();
// })
let  { default: jsmin } = require("gulp-uglify-es");

gulp.task("jsmin",function(done) {
    gulp.src(`${app.src}/**/*.js`)
    .pipe(jsmin())
    .pipe(gulp.dest(app.dist));
done();
})

//文件重命名

let rename = require("gulp-rename");
gulp.task("bak",function(done) {
    gulp.src(`${app.src}/**`)
        .pipe(rename(function(target,info) {
            if(target.extname) {
                target.extname += ".bak";
            }
        }))
        .pipe(gulp.dest(app.dist));
    done();
});

//文件合并

let concat = require("gulp-concat");
gulp.task("concat",function(done) {
    gulp.src(`${app.src}/*.css`)
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(app.dist));
    done();
})

//less编译

let less = require("gulp-less");

// 将src/less/*.less编译到dist/css/*.css
gulp.task(`less1`,function(done) {
    gulp.src(`${app.src}/less/*.less`)
    .pipe(less())
    .pipe(gulp.dest(app.dist + "/css"));
done();
});
// 将src/less/*.less编译到dist/css/all.css
let less = require("gulp-less");
gulp.task(`less2`,function(done) {
    gulp.src(`${app.src}/less/*.less`)
    .pipe(less())
    .pipe(concat("all.css"))
    .pipe(gulp.dest(app.dist + "/css"));
done();
});

// 将src/less/*.less编译并压缩到dist/css/all.min.css
let less = require("gulp-less");
gulp.task(`less3`,function(done) {
    gulp.src(`${app.src}/less/*.less`)
    .pipe(less())
    .pipe(concat("all.css"))
    .pipe(cssmin())
    .pipe(rename("all.min.css"))
    .pipe(gulp.dest(app.dist + "/css"));
done();
});


