// 文件目录的拷贝和删除

let gulp = require("gulp");

let app ={
    src: "./src",
    dist:"./dist"
}
//实现src拷贝至dist/src
gulp.task("copy1",function(done) {
    gulp.src(app.src)
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/**")
        .pipe(gulp.dest(app.dist + "/src"));
    done();
});


//实现选择拷贝
gulp.task("copy2",function(done) {
    gulp.src(app.src + "/js")
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/css")
        .pipe(gulp.dest(app.dist));

    gulp.src(app.src + "/js/**")
        .pipe(gulp.dest(app.dist + "/js"));
    gulp.src(app.src + "/css/**")
        .pipe(gulp.dest(app.dist + "/css"));
    
    done();
});

//!剔除不需要的内容

gulp.task("copy3",function(done) {
    gulp.src([`${app.src}/*`,`!${app.src}/js`,`!${app.src}/css`])
        .pipe(gulp.dest(app.dist));
    done();
});

//只导出项目中的所有页面

// 方法一：

gulp.task("copy4",function(done) {
    gulp.src([`${app.src}/**/*.html`,`${app.src}/**/*.htm`])
        .pipe(gulp.dest(app.dist));
    done();
});

//方法二
// 枚举{}：指定几个值
gulp.task("copy4",function(done) {
    gulp.src(`${app.src}/**/*.{html,htm}`)
        .pipe(gulp.dest(app.dist));
    done();
});


//实现删除功能

//删除内容保留目录
let clean = require("gulp-clean");
gulp.task("clean1",function(done) {
    gulp.src(app.dist + "/*")
        .pipe(clean());
    done();
});


//删除目录
gulp.task("clean2",function(done) {
    gulp.src(app.dist)
        .pipe(clean());
    done();
}) ;

//选择删除

gulp.task("clean3",function(done) {
    gulp.src(`${app.dist}/**/*.{html,htm}`)
        .pipe(clean());
    done();
});