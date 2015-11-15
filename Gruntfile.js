'use strict';
module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    middleware: function (connect, options) {
                        return [
                            require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },
        regarde: {
            all: {
                files: ['index.html, **/*.js'],
                tasks: ['livereload']
            }
        }
    });

    grunt.registerTask('serve', [
        'livereload-start',
        'connect',
        'regarde'
    ]);
};