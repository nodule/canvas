module.exports = {
  name: "readImage",
  ns: "canvas",
  title: "Read Image",
  description: "Read image",
  phrases: {
    active: "Reading image"
  },
  ports: {
    input: {
      module: {
        title: "Canvas Module",
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
      fs: require('fs')
    }
  },
  fn: function readImage(input, $, output, state, done, cb, on, fs) {
    var r = function() {
      var image = new $.module.Image()
      image.src = fs.readFileSync($.path)

      output({
        out: $.write('path', image)
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