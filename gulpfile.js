// 获取 gulp
var gulp = require("gulp");
var concat = require("gulp-concat");
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('jscompress', function() {
    // 1. 找到文件
   return gulp.src('src/source/TMap.js')
    // 2. 压缩文件
        .pipe(uglify())
        .pipe(obfuscate())
        // 3. 另存压缩后的文件
		.pipe(concat('tmap'+".js"))
        .pipe(gulp.dest('dist/js'));
});