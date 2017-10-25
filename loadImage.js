module.exports = {
  name: "loadImage",
  ns: "canvas",
  title: "Load Image",
  description: "Load image",
  phrases: {
    active: "Loading image"
  },
  ports: {
    input: {
      module: {
        title: "Module",
        type: "function"
      },
      path: {
        title: "Path",
        type: "string"
      }
    },
    output: {
      out: {
        title: "Image",
        type: "Image"
      }
    }
  },
  dependencies: {
    npm: {
      canvas: require('canvas')
    }
  },
  fn: function loadImage(input, $, output, state, done, cb, on, canvas) {
    var r = function() {
      $.module.loadImage($.path).then(function(image) {
          output({
            out: $.write('path', image)
          });
          done();
        })
        .catch(function(error) {
          output({
            error: $.write('path', error)
          });
          done();
        });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}