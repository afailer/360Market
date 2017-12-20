var gulp = require("gulp");
var sass = require("gulp-sass");
var rename=require("gulp-rename");
var concat=require("gulp-concat");
//布置一个任务  ：  实现 将 index.html 复制到  html目录下
gulp.task("copyHTML",function(){
	return gulp.src("index.html")
			   .pipe( gulp.dest("html") );
})
//布置一个任务  将js目录下的所有js文件 和 css目录下的所有css文件 复制到 all目录下
gulp.task( "common",function(){
	return gulp.src("css/common.scss")
			   .pipe(sass())
			   .pipe(rename("common.css"))
			   .pipe(gulp.dest("css"));
})
gulp.task( "index",function(){
	return gulp.src("css/index.scss")
			   .pipe(sass())
			   .pipe(rename("index.css"))
			   .pipe(gulp.dest("css"));
})
gulp.task( "goodsList",function(){
	return gulp.src("css/goods_list.scss")
			   .pipe(sass())
			   .pipe(rename("goods_list.css"))
			   .pipe(gulp.dest("css"));
})
gulp.task( "goodsDetail",function(){
	return gulp.src("css/goodsDetail.scss")
			   .pipe(sass())
			   .pipe(rename("goodsDetail.css"))
			   .pipe(gulp.dest("css"));
})
gulp.task( "regist",function(){
	return gulp.src("css/regist.scss")
			   .pipe(sass())
			   .pipe(rename("regist.css"))
			   .pipe(gulp.dest("css"));
})
//布置一个任务  监听index.html的文件内容的改变 
// 如果index.html内容改变了  就自动更改 html目录下的index.html
gulp.task( "watch" , function(){
	return gulp.watch( "css/regist.scss",["regist"]);
})
gulp.task( "w" , function(){
	return gulp.watch( "css/goodsDetail.scss",["goodsDetail"]);
})