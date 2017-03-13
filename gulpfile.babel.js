import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import envify from 'loose-envify/custom';
import sassify from 'sassify';

var $ = plugins({ pattern: '*' });

var cfg = {
	from: './_src',
	to: './public'
};

gulp.task('html', () => {
	return gulp.src([cfg.from + '/**/*.html'])
			   .pipe($.filesize())
			   .pipe($.htmlmin({collapseWhitespace: true}))
			   .pipe(gulp.dest(cfg.to));
});

gulp.task('bundle', () => {

  return browserify({
	    extensions: ['.jsx', '.js'],
	    entries: './_src/app.js'
	    })
	    .transform(babelify.configure({
	      presets: ["es2015", "react"],
	      ignore: /(node_modules)/
	    }))
	    .transform(sassify, {
        'auto-inject': true, // Inject css directly in the code 
        base64Encode: false, 
        sourceMap: false 
      })
	    .transform(
	      envify({
	        _: 'purge', NODE_ENV: 'production'
	      }), { global: true })
	    .bundle()
	    .on("error", function (err) { console.log("Error : " + err.message); this.emit('end'); })
	    .pipe(source('bundle.min.js'))
	    .pipe(buffer())
	    .pipe($.uglify())
		.pipe(gulp.dest(cfg.to));
});

gulp.task('watch', () => {
	gulp.watch([cfg.from + '/**/*.html'], ['html']);
	gulp.watch([cfg.from + '/**/*.js', cfg.from + '/**/*.jsx', cfg.from + '/**/*.scss'], ['bundle']);
});

gulp.task('browser-sync', () => {
	$.browserSync.init([cfg.to], {
		proxy: 'http://localhost:3000',
		port: 3001,
		notify: false
	});
});

gulp.task('default', ['html', 'bundle', 'watch', 'browser-sync']);


