const { watch, series, src, dest }  = require('gulp');
const autoprefixer                  = require('gulp-autoprefixer');
const browserSync                   = require('browser-sync').create();
const reload                        = browserSync.reload;
const sass                          = require('gulp-sass');
const cleanCSS                      = require('gulp-clean-css');
const rename                        = require('gulp-rename');
const sourcemaps                    = require('gulp-sourcemaps');
const concat                        = require('gulp-concat');
const imagemin                      = require('gulp-imagemin');
const changed                       = require('gulp-changed');
const uglify                        = require('gulp-uglify');
const nodemon                       = require('gulp-nodemon');


// ============= SCSS and CSS ============

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

exports.compileScss = compileScss;

function minifyCss() {
  return src( 'src/css/main.css')
  .pipe( sourcemaps.init({ loadMaps: true }))
  .pipe( cleanCSS() )
  .pipe( sourcemaps.write() )
  .pipe( rename( 'main.min.css') )
  .pipe( dest( 'public/css') )
}

exports.minifyCss = minifyCss;

// ============= JS =============

function concatAndMinifyJs() {
  return src( [ 'src/js/*.js' ] )
  .pipe( concat( 'main.min.js' ))
  .pipe( uglify() )
  .pipe( dest( 'public/js' ))
}

exports.concatAndMinifyJs = concatAndMinifyJs;

// ============= media ============

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

exports.imageMin = imageMin;

// ============= NODEMON AND BROWSERSYNC ============

function initNodemon( done ) {
  const STARTUP_TIMEOUT = 5000;

  const server = nodemon({
    script: 'app.js',
    stdout: false // without this line the stdout event won't fire
  });

  let starting = false;

  const onReady = () => {
    starting = false;
    done();
  };

  server.on('start', () => {
    starting = true;
    setTimeout( onReady, STARTUP_TIMEOUT );
  });

  server.on( 'stdout', ( stdout ) => {
    process.stdout.write( stdout ); // pass the stdout through
    if ( starting ) {
      onReady();
    }
  });
}

exports.initNodemon = initNodemon;

function initBrowserSync( done ) {
  browserSync.init({
    open: 'external',
    proxy: 'http://localhost:3000',
    port: 3000,
    files: [ "public/**/*.*" ],
    browser: "google chrome",
  }, done );
}

exports.initBrowserSync = initBrowserSync;

function initServer( done ) {
  return series( initNodemon, initBrowserSync )( done );
}

exports.initServer = initServer;

// ============= WATCH ============

function watchFiles() {
  watch( ['src/scss/*.scss'], series( compileScss, minifyCss ) );
  watch( ['src/js/*.js'], series( concatAndMinifyJs, reload ) );
  watch( ['public/photos/*.jpg', 'public/photos/*.svg'], series( imageMin, initNodemon, reload ) );
  watch( [ 
    'public/css/*.css', 
    'public/js/*.js', 
    'public/photos/*.jpg', 
    'public/photos/*.svg',
  ])
  .on( 'change', reload );
}

exports.watchFiles = watchFiles;

// ============= execute ============

function build( done ){
  return series( compileScss, minifyCss, concatAndMinifyJs, imageMin )( done );
}

exports.build = build;

exports.default = series( build, initServer, watchFiles );