let path = require('path')
let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')  // 压缩css文件
let cssWrap = require('gulp-css-wrap')   // 批量增加css扩展名
let themeColorName = 'greenyellow';
gulp.task('css-wrap', function () {
  /* 这是找到需要添加命名空间的css文件*/
  return gulp.src(path.resolve('./theme/index.css'))
    .pipe(cssWrap({
      selector: '.custom-'+themeColorName /* 添加的命名空间 */
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/assets/theme/'+themeColorName)) /* 存放的目录 */
})
// 将element-ui中的Icon图进行打包
gulp.task('move-font', function() {
  return gulp.src(['./theme/fonts/**'])
    .pipe(gulp.dest('src/assets/theme/'+themeColorName+'/fonts'));
});
gulp.task('default',['css-wrap','move-font']);
