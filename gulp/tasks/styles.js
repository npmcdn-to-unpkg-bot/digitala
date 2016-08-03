import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import sourcemaps   from 'gulp-sourcemaps';
import sass         from 'gulp-sass';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('blogStyles', function () {

  const createSourcemap = !global.isProd || config.blog.styles.prodSourcemap;

  return gulp.src(config.blog.styles.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(sass({
      sourceComments: !global.isProd,
      outputStyle: global.isProd ? 'compressed' : 'nested',
      includePaths: config.blog.styles.sassIncludePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%', 'ie 8']
    }))
    .pipe(gulpif(
      createSourcemap,
      sourcemaps.write( global.isProd ? './' : null ))
    )
    .pipe(gulp.dest(config.blog.styles.dest))
    .pipe(browserSync.stream());

});

gulp.task('adminStyles', function () {

  const createSourcemap = !global.isProd || config.admin.styles.prodSourcemap;

  return gulp.src(config.admin.styles.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(sass({
      sourceComments: !global.isProd,
      outputStyle: global.isProd ? 'compressed' : 'nested',
      includePaths: config.admin.styles.sassIncludePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%', 'ie 8']
    }))
    .pipe(gulpif(
      createSourcemap,
      sourcemaps.write( global.isProd ? './' : null ))
    )
    .pipe(gulp.dest(config.admin.styles.dest))
    .pipe(browserSync.stream());

});
