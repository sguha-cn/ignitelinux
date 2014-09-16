module.exports = function (grunt) {
    grunt.initConfig({
      notify: {
            "js": { 
                options: {
                    message: "JS done"
                }
            }

        },

        watch: {
          js: {
            files: ['app.js', 'custom.js'],
            tasks: ['uglify']
          },
        },

       // define source files and their destinations
       uglify: {
           files: { 
               src: ['app.js', 'custom.js', ],  // source files mask
               dest: 'min/',    // destination folder
               expand: true,    // allow dynamic building
               flatten: false,   // remove all unnecessary nesting
           }
       }
    });

    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('n', ['notify']);

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register at least this one task
    grunt.registerTask('default', [ 'uglify' ]);

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('w', ['watch']);

    
};