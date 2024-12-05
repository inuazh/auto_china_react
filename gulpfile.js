const gulp = require('gulp');
const webpack = require('webpack-stream'); // Подключаем Webpack

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');
require('./gulp/fontsDev.js');
require('./gulp/fontsDocs.js');

// Новая задача для сборки React
gulp.task('react', () => {
    return gulp
        .src('src/js/index.js') // Точка входа для React
        .pipe(webpack(require('./webpack.config.js'))) // Используем Webpack конфигурацию
        .pipe(gulp.dest('build/js')); // Сохраняем результат в папке
});

// Задача по умолчанию
gulp.task(
	'default',
	gulp.series(
		'clean:dev', 'fontsDev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', gulp.series('svgStack:dev', 'svgSymbol:dev'), 'files:dev', 'js:dev', 'react'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

// Сборка для production (docs)
gulp.task(
	'docs',
	gulp.series(
		'clean:docs', 'fontsDocs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', gulp.series('svgStack:docs', 'svgSymbol:docs'), 'files:docs', 'js:docs', 'react'),
		gulp.parallel('server:docs')
	)
);


