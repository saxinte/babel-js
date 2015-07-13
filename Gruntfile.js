module.exports = function(grunt) {

    grunt.initConfig({

        // Converts ECMAScript 6 to 5
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/es5.js": 'dist/es6.js'
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'src/utils.js',
                    'src/arrow.js',
                    'src/let.js'
                ],
                dest: 'dist/es6.js',
            }
        },

        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['compile'],
                event: ['changed']
            }
        }

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('default', ['compile', 'watch']);
    grunt.registerTask('compile', ['concat', 'babel']);

};