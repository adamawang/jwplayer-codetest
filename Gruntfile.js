const webpack = require('webpack');
const path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      dev: 'src',
      build: '<%= grunt.template.today("yyyymmdd") %>'
    },

    // local server
    nodemon: {
      dev: {
        script: './server/server.js'
      }
    },

    // compile less
    less: {
      dev: {
        files: {
          '<%= project.dev %>/styles/style.css': ['<%= project.dev %>/styles/styles.less']
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      dist: {
        files: {
          '<%= project.dev %>/styles/style.min.css': '<%= project.dev %>/styles/style.css'
        }
      }
    },

    // webpack

    webpack: {
      build: {
        entry: [
          path.join(__dirname, '/src/client/index.jsx'),
        ],
        output: {
          path: path.resolve(__dirname, 'src/public'),
          filename: 'bundle.js',
        },
        stats: {
          colors: true,
          modules: true,
          reasons: true
        },
        module: {
          rules: [
            {
              test: /\.jsx?/,
              include: path.resolve(__dirname, 'src/'),
              exclude: /node_modules/,
              loaders: ['babel-loader'],
            },
          ],
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
        ]
      }
    }
  });

  // Tasks
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('server-dev', function (target) {
    grunt.task.run([ 'nodemon', 'watch' ]);
  });

  grunt.registerTask('build', [
    'webpack',
    'less',
    'cssmin',
    'nodemon'
  ]);
  grunt.registerTask('default', [
    'build'
  ])


};
