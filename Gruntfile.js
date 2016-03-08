module.exports = function(grunt) {
  grunt.initConfig({

    jade: {
      compile: {
        files: [{
          expand: true,
          cwd: "src",
          src: "*.jade",
          dest: "dist",
          ext: ".html"
    }]}}

    ,copy: {
      css: {
        expand: true,
        cwd: 'src',
        src: '*.css',
        dest: 'dist/',
      },
    }

    ,watch: {
      jade: {
        files: [ 'src/*.jade' ],
        tasks: ['jade']
      }
      ,css: {
        files: [ 'src/*.css' ],
        tasks: ['copy:css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'copy']);
};
