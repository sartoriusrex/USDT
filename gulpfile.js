const { watch, series, src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');

// // Steps
// // Concat all scss files to main scss file
// // compile scss files to css file
// // minify css file
// // clean up other files
// // repeat for javascript
// // minify media
// // start up nodemon
// // watch for changes to scss files and javascript files

function compileScss() {
  return src([ 'src/scss/main.scss' ])
  .pipe( sourcemaps.init({ loadMaps: true }))
  .pipe( sass({
    outputStyle: 'expanded'
    }).on( 'error', sass.logError))
  .pipe( autoprefixer( 'last 2 versions' ) )
  .pipe( sourcemaps.write() )
  .pipe( dest( 'src/css' ) );
}

function minifyCss() {
  return src( 'src/css/main.css')
  .pipe( sourcemaps.init({ loadMaps: true }))
  .pipe( cleanCSS() )
  .pipe( sourcemaps.write() )
  .pipe( rename( 'main.min.css') )
  .pipe( dest( 'public/css') )
}

function concatAndMinifyJs() {
  return src( [ 'src/js/*.js' ] )
  .pipe( concat( 'main.min.js' ))
  .pipe( uglify() )
  .pipe( dest( 'public/js' ))
}

function imageMin() {
  return src( ['public/src/photos/*.jpg', 'public/src/photos/*.svg'] )
  .pipe(changed( 'public/src/photos' ))
  .pipe( imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5})
  ]))
  .pipe( dest( 'public/src/photos' ) );
}

function watchFiles() {
  watch( ['src/scss/*.scss'], series( compileScss, minifyCss ) );
  watch( ['src/js/*.js'], concatAndMinifyJs );
  watch( ['public/photos/*.jpg', 'public/photos/*.svg'], imageMin );
}

function build( done ){
  return series( compileScss, minifyCss, concatAndMinifyJs, imageMin )( done );
}

exports.default = series( build, watchFiles );

// function initNodemon(){
//   nodemon({
//     script: 'app.js',
//     ext: 'js html ejs scss', 
//   });

// }

// function watch( done ) {
//   watch( 'src/scss/*.scss', series( compileSass, initNodemon ));
//   watch( 'views/**/*.ejs', initNodemon );

//   done()
// }

// function serve() {
//   compileSass();
//   initNodemon();
//   watch();
// }

// exports.default = series( serve )

// // const scss = './src/scss/';
// // const scssDest = './src';

// // const jsSrc = './src/js/';
// // const jsDest = './public/js';

// // const cssSrc = './src/scss/';
// // const cssDest = './public/css';

// // const jsWatch = '**/*.js';
// // const cssWatch = '**/*.scss';

// // const jsFiles = [
// //   jsSrc + 'main.js'
// // ]

// // const cssFiles = [
// //   cssSrc + 'main.css'
// // ]

// // const imgSrc = './src/imgs';
// // const imgDest = './public/photos';

// // function compileCss() {
// //   return gulp.src( [ 'src/scss/*.scss' ] )
 
// // }

// // function concatCss() {
// //   return gulp.src( ['public/css/*.css'] )
// //   .pipe( sourcemaps.init({loadMaps: true, largeFile: true}))
// //   .pipe( concat( 'style.min.css' ) )
// //   .pipe( cleanCSS() ) 
// //   .pipe( sourcemaps.write( './maps/' ) )
// //   .pipe( gulp.dest( 'public/css' ) );
// // }

// // function javascript() {
// //   return gulp.src( jsFiles )
// //   .pipe( concat( 'javascript.min.js' ) )
// //   .pipe( uglify() )
// //   .pipe( gulp.dest( jsDest ) );
// // }

// // function imgmin() {
//   return gulp.src( imgSrc )
//   .pipe(changed( imgDest))
//       .pipe( imagemin([
//         imagemin.gifsicle({interlaced: true}),
//         imagemin.jpegtran({progressive: true}),
//         imagemin.optipng({optimizationLevel: 5})
//       ]))
//       .pipe( gulp.dest( imgDest ) );
// // }

// // function build() {
// //   return gulp.series( compileCss, concat, javascript );
// // }

// // function initNodemon( done ) {
// //   const STARTUP_TIMEOUT = 5000;
// //   const server = nodemon({
// //     script: 'app.js',
// //     stdout: false // without this line the stdout event won't fire
// //   });
// //   let starting = false;

// //   const onReady = () => {
// //     starting = false;
// //     done();
// //   };

// //   server.on('start', () => {
// //     starting = true;
// //     setTimeout( onReady, STARTUP_TIMEOUT );
// //   });

// //   server.on( 'stdout', ( stdout ) => {
// //     process.stdout.write( stdout ); // pass the stdout through
// //     if ( starting ) {
// //       onReady();
// //     }
// //   });
// // }

// // function initBrowserSync( done ) {
// //   browserSync.init({
// //     open: 'external',
// //     proxy: 'http://localhost:3000',
// //     port: 3000,
// //     browser: "google chrome",
// //   }, done );
// // }

// // function watch() {
// //   gulp.watch( cssWatch, gulp.series( compileCss, concatCss, javascript ));
// //   gulp.watch( jsFiles, javascript );
// //   gulp.watch( imgSrc, imgmin );
// //   gulp.watch([ 
// //     jsWatch, 
// //     jsDest + 'javascript.min.js', 
// //     cssDest + 'style.min.css'])
// //     .on( 'change', reload );
// // }

// // exports.initBrowserSync = initBrowserSync;
// // exports.initNodemon = initNodemon;
// // exports.compileCss = compileCss;
// // exports.concatCss = concatCss;
// // exports.javascript = javascript;
// // exports.watch = watch;
// // exports.imgmin = imgmin;

// // var initialize = gulp.series( initNodemon, initBrowserSync, watch );