"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "src/css/style.css": "src/less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "src/css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    clean: {
      build: ["build/**"]
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: [
            "fonts/**/*.{woff,woff2}",
            "css/**",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      }
    },

    replace: {
      inline: {
        src: ["build/*.html"],
        dest: "build/",
        replacements: [{
          from: "css/style.css",
          to: "css/style.min.css"
        }, {
          from: "js/app.js",
          to: "js/app.min.js"
        }]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      jsmini: {
        files: {
          "build/js/app.min.js": ["build/js/app.js"],
        }
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "src/*.html",
            "src/css/*.css"
          ]
        },
        options: {
          server: "src/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["src/less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false
        }
      }
    },

    "gh-pages": {
      options: {
        base: "build",
      },
      src: ["**"]
    }
  });

  grunt.registerTask("deploy", ["less", "postcss"]);
  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "less",
    "postcss",
    "copy",
    "csso",
    "uglify",
    "replace",
    "imagemin"
  ]);
};
