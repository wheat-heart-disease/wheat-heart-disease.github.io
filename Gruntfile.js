module.exports = function(grunt) {
    grunt.initConfig    ({
        compass: {
            dist: {
                options: {
                    environment: 'production',
                    sassDir: '_assets/scss',
                    cssDir: 'css'
                }
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '_assets',
                    src: 'js/*.js'
                }]
            }
        },
        jekyll: {
            dist: {}
        },
        connect: {
            dist: {
                options: {
                    base: '_site'
                }
            }
        },
        watch: {
            compass: {
                files: ['_assets/scss/*'],
                tasks: ['compass'],
                options: {
                    atBegin: true
                }
            },
            uglify: {
                files: ['_assets/js/*'],
                tasks: ['uglify'],
                options: {
                    atBegin: true
                }
            },
            jekyll: {
                files: ['_data/**/*', '_includes/*', '_layouts/*', 'image/**/*', 'css/*', 'js/*'],
                tasks: ['jekyll'],
                options: {
                    atBegin: true
                }
            }
        },
        gitpush: {
            dist: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('build', ['uglify', 'compass', 'jekyll']);
    grunt.registerTask('serve', ['connect', 'watch']);
    grunt.registerTask('deploy', ['build', 'gitpush']);
    grunt.registerTask('default', ['watch']);
};
