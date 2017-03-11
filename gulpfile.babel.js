import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import envify from 'loose-envify/custom';

var $ = plugins({ pattern: '*' });

// function handleError (error) {
// 	console.log(error,toString());
// 	this.emit('end');
// };

var cfg = {
	from: './_src',
	to: './public'
};

gulp.task('html', () => {
	gulp.src([cfg.from + '/**/*.html'])
			   // .pipe($.changed(cfg.to, {extension: '.html'}))	
			   .pipe($.filesize())
			   .pipe($.htmlmin({collapseWhitespace: true}))
			   .pipe(gulp.dest(cfg.to));
});

// gulp.task('css', () => {
// 	gulp.src([
// 				'./bower_components/bootstrap/dist/css/bootstrap.min.css',
// 				cfg.from + '/assets/sass/**/*.scss'
// 			])
// 		  	   // .pipe($.changed(cfg.to + '/assets/css', {extension: '.css'}))
// 			   .pipe($.sass())
// 		       .on('error', handleError)
// 			   .pipe($.cssnano())
// 		       .on('error', handleError)
// 			   .pipe($.minifyCss())
// 			   .pipe($.concat('styles.min.css'))
// 			   .pipe($.filesize())
// 		       .pipe(gulp.dest(cfg.to + '/assets/css/'));
// });

gulp.task('js', () => {

  return browserify({
	    extensions: ['.jsx', '.js'],
	    entries: './_src/app.js'
	    })
	    .transform(babelify.configure({
	      presets: ["es2015", "react"],
	      ignore: /(node_modules)/
	    }))
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
	let html = gulp.watch([cfg.from + '/**/*.html'], ['html']);
	// let css = gulp.watch([cfg.from + '/assets/sass/**/*.scss'], ['css']);
	let js = gulp.watch([cfg.from + '/**/*.js', cfg.from + '/**/*.jsx'], ['js']);
});

gulp.task('browser-sync', () => {
	$.browserSync.init([cfg.to], {
		proxy: 'http://localhost:3000',
		port: 3001,
		notify: false
	});
});

gulp.task('default', ['html', 'js', 'watch', 'browser-sync', ]);


