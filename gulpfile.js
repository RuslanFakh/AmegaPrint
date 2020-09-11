const gulp = require('gulp'),
    del = require('del'),
    cache = require('gulp-cache'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    include = require('gulp-file-include'),
    autoprefixer = require('gulp-autoprefixer'),
    svgSprite = require("gulp-svg-sprite"),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    cleanCss = require('gulp-clean-css'),
    uglifyJs = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();



const path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
    },
    src: {
        html: 'src/*.html',
        css: 'src/css/style.css',
        less: 'src/precss/style.less',
        less_css: 'src/css/',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        svg: 'src/svg/*.svg'
    },
    watch: {
        html: 'src/**/*.html',
        less: 'src/precss/**/*.less',
        css: 'src/css/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
    }
};

const plumberOptions = {
    handleError: function(err) {
        console.log(err);
        this.emit('end');
    }
};

const autoprefixerOptions = {
    browsers: ['last 15 versions', "ie 9", 'android 4', 'opera 12.1'],
    cascade: false
}

function html() {
    return gulp.src(path.src.html)
        .pipe(plumber(plumberOptions))
        .pipe(include())
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.stream());
};

function lessDev() {
    return gulp.src(path.src.less)
        .pipe(plumber(plumberOptions))
        .pipe(less())
        .pipe(gulp.dest(path.src.less_css))
        .pipe(browserSync.stream());
}

function css() {
    return gulp.src(path.src.css)
        .pipe(plumber(plumberOptions))
        .pipe(include())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cleanCss({ level: 2 }))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src(path.src.js)
        .pipe(plumber(plumberOptions))
        .pipe(include())
        .pipe(uglifyJs())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

function svg() {
    return gulp.src(path.src.svg)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg",
                }
            }
        }))
        .pipe(gulp.dest(path.build.svg));
};

function img() {
    return gulp.src(path.src.img)
        .pipe(cache(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: true }] })
        ])))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
};

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
}

function clean() {
    return del(['build/']);
}

function watcher() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.less, lessDev);
    gulp.watch(path.watch.css, css);
    gulp.watch('./**/*.html', browserSync.reload);

}

gulp.task('default', gulp.series(html, lessDev, css, watcher));
gulp.task('build', gulp.series(clean, html, lessDev, css, js, fonts, img, svg));