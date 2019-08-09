const pkg = require('./package.json');

const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies']
});

const { watch, series, src, dest }  = require('gulp');
const cleanCss                      = require('gulp-clean-css');
const browserSync                   = $.browserSync.create();
const reload                        = browserSync.reload;

const onError = err => {
  console.log( err );
};


// ============= SCSS and CSS ============

function compileScss() {
  $.fancyLog("-> Compiling scss:");
  return src([ pkg.paths.src.scss + 'main.scss' ])
    .pipe( $.plumber({ errorHandler: onError }))
    .pipe( $.sourcemaps.init({ loadMaps: true }))
    .pipe( $.sass({
      outputStyle: 'expanded'
      }).on( 'error', $.sass.logError))
    .pipe( $.autoprefixer( 'last 2 versions' ) )
    .pipe( $.sourcemaps.write() )
    .pipe( dest( pkg.paths.src.css ) )
}

exports.compileScss = compileScss;

function minifyCss() {
  $.fancyLog("-> Minifying css:");
  return src( pkg.paths.src.css + '/' + 'main.css' )
    .pipe( $.plumber({ errorHandler: onError }))
    .pipe( $.sourcemaps.init({ loadMaps: true }))
    .pipe( cleanCss() )
    .pipe( $.sourcemaps.write() )
    .pipe( $.rename( 'main.min.css' ) )
    .pipe( dest( pkg.paths.dist.css ) )
}

exports.minifyCss = minifyCss;

// ============= JS =============

function concatAndMinifyJs() {
  $.fancyLog("-> Concatenating all JS files and Minifying");
  return src( [ pkg.paths.src.js ] )
    .pipe( $.plumber({ errorHandler: onError }))
    .pipe( $.concat( 'main.min.js' ))
    .pipe( $.uglify() )
    .pipe( dest( pkg.paths.dist.js ))
}

exports.concatAndMinifyJs = concatAndMinifyJs;

// ============= media ============

function imageMin() {
  $.fancyLog("-> Optimizing Media");
  return src( ['public/src/photos/*.jpg', 'public/src/photos/*.svg'] )
    .pipe( $.plumber({ errorHandler: onError }))
    .pipe( $.changed( 'public/src/photos' ))
    .pipe( $.imagemin([
      $.imagemin.gifsicle({interlaced: true}),
      $.imagemin.jpegtran({progressive: true}),
      $.imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe( dest( 'public/src/photos' ) )
}

exports.imageMin = imageMin;

// ============= NODEMON AND BROWSERSYNC ============

function initNodemon( done ) {
  const STARTUP_TIMEOUT = 5000;

  const server = $.nodemon({
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
    port: 8000,
    browser: "google chrome",
    reloadDebounce: 5000,
    reloadThrottle: 5000
  }, done );
}

exports.initBrowserSync = initBrowserSync;

function initServer( done ) {
  return series( initNodemon, initBrowserSync )( done );
}

exports.initServer = initServer;

// ============= WATCH ============


function watchFiles() {
  $.fancyLog("-> Watching Files");
  watch( 
    [ pkg.paths.watch.scss ], 
    series( compileScss, minifyCss ) 
  );
  watch( 
    [ pkg.paths.watch.jsSrc ], 
    series( concatAndMinifyJs ) 
  );
  watch( 
    [ 'public/photos/*.jpg', 'public/photos/*.svg' ], 
    series( imageMin ) 
  );
  watch( [ 
    pkg.paths.watch.css, 
    pkg.paths.watch.jsDist, 
    pkg.paths.watch.views,
    'public/photos/*.jpg', 
    'public/photos/*.svg',
  ] )
  .on( 'change', reload );
}

exports.watchFiles = watchFiles;

// ============= execute gulp commmands ============

function build( done ){
  return series( compileScss, minifyCss, concatAndMinifyJs, imageMin )( done );
}

exports.build = build;

exports.default = series( build, initServer, watchFiles );