var del = require('del');
var gulp = require('gulp');
var path = require('path');
var argv = require('yargs').argv;
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var exorcist = require('exorcist');
var babelify = require('babelify');
var browserify = require('browserify');

var PHASER_PATH = './node_modules/phaser-ce/build/';
var PHASER_STATE_TRANSITION_PLUGIN_PATH = './node_modules/phaser-state-transition/dist/';
var BUILD_PATH = './build';
var SCRIPTS_PATH = BUILD_PATH + '/scripts';
var SOURCE_PATH = './src';
var ASSETS_PATH = './assets';
var DATA_PATH = './data';
var ENTRY_FILE = SOURCE_PATH + '/index.js';
var OUTPUT_FILE = 'game.js';

var keepFiles = false;

/**
 * Simple way to check for development/production mode.
 */
function isProduction() {
    return argv.production;
}

/**
 * Logs the current build mode on the console.
 */
function logBuildMode() {
    if (isProduction()) {
        gutil.log(gutil.colors.green('Running production build...'));
    } else {
        gutil.log(gutil.colors.yellow('Running development build...'));
    }

}

/**
 * Deletes all content inside the './build' folder.
 * If 'keepFiles' is true, no files will be deleted. This is a dirty workaround since we can't have
 * optional task dependencies :(
 * Note: keepFiles is set to true by gulp.watch (see serve()) and reseted here to avoid conflicts.
 */
function cleanBuild() {
    if (!keepFiles) {
        del(['build/**/*.*']);
    } else {
        keepFiles = false;
    }
}

/**
 * Copies the content of the './assets' folder into the '/build' folder.
 */
function copyAssets() {
    return gulp.src(ASSETS_PATH + '/**/*')
        .pipe(gulp.dest(BUILD_PATH));
}


/**
 * Copies the content of the './data' folder into the '/build' folder.
 */
function copyData() {
    return gulp.src(DATA_PATH + '/**/*')
        .pipe(gulp.dest(BUILD_PATH + '/data'));
}

/**
 * Copies required Phaser files from the './node_modules/phaser-ce' folder into the './build/scripts' folder.
 * This way you can call 'npm update', get the lastest Phaser version and use it on your project with ease.
 */
function copyPhaser() {

    var srcList = ['phaser.min.js'];
    
    if (!isProduction()) {
        srcList.push('phaser.map', 'phaser.js');
    }
    
    srcList = srcList.map(function(file) {
        return PHASER_PATH + file;
    });
        
    return gulp.src(srcList)
        .pipe(gulp.dest(SCRIPTS_PATH));

}

function copyPhaserStateTransitionPlugin() {
    var srcList = ['phaser-state-transition.min.js'];
    
    if (!isProduction()) {
        srcList.push('phaser-state-transition.js');
    }
    
    srcList = srcList.map(function(file) {
        return PHASER_STATE_TRANSITION_PLUGIN_PATH + file;
    });
        
    return gulp.src(srcList)
        .pipe(gulp.dest(SCRIPTS_PATH));
}

/**
 * Transforms ES2015 code into ES5 code.
 * Optionally: Creates a sourcemap file 'game.js.map' for debugging.
 * 
 * In order to avoid copying Phaser and Static files on each build,
 * I've abstracted the build logic into a separate function. This way
 * two different tasks (build and fastBuild) can use the same logic
 * but have different task dependencies.
 */
function build() {

    var sourcemapPath = SCRIPTS_PATH + '/' + OUTPUT_FILE + '.map';
    logBuildMode();

    return browserify({
            paths: [path.join(__dirname, 'src')],
            entries: ENTRY_FILE,
            debug: true,
            transform: [
                [
                    babelify, {
                        presets: ["es2015"]
                    }
                ]
            ]
        })
        .transform(babelify)
        .bundle().on('error', function(error) {
            gutil.log(gutil.colors.red('[Build Error]', error.message));
            this.emit('end');
        })
        .pipe(gulpif(!isProduction(), exorcist(sourcemapPath)))
        .pipe(source(OUTPUT_FILE))
        .pipe(buffer())
        .pipe(gulpif(isProduction(), uglify()))
        .pipe(gulp.dest(SCRIPTS_PATH));

}

gulp.task('cleanBuild', cleanBuild);
gulp.task('copyAssets', ['cleanBuild'], copyAssets);
gulp.task('copyData', ['copyAssets'], copyData);
gulp.task('copyPhaser', ['copyData'], copyPhaser);
gulp.task('copyPhaserStateTransitionPlugin', ['copyPhaser'], copyPhaserStateTransitionPlugin);
gulp.task('build', ['copyPhaser', 'copyPhaserStateTransitionPlugin'], build);
gulp.task('fastBuild', build);

gulp.task('default', ['build']);
