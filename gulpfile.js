var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('web', function(){
    nodemon({
        script: 'curator-web/express-server/app.js',
        ext:'*.nothing',
        env: {
            'NODE_ENV': 'development'
        }
    });
    nodemon({
        script: 'curator-svc/bin/www',
        ext:'*.nothing',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

gulp.task('svc', function(){
    nodemon({
        script: 'curator-svc/bin/www',
        ext:'*.nothing',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

gulp.task('lb', function(){
    nodemon({
        script: 'curator-lb/redbird.js',
        ext:'*.nothing',
        env: {
            'NODE_ENV': 'development'
        }
    });
});

gulp.task('default', ['web', 'svc']);