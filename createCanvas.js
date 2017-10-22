module.exports = {
  name: "createCanvas",
  ns: "canvas",
  title: "Create Canvas",
  description: "Create Canvas",
  phrases: {
    active: "Creating Canvas"
  },
  ports: {
    input: {
      width: {
        title: "Width",
        type: "number"
      },
      height: {
        title: "Height",
        type: "number"
      }
    },
    output: {
      out: {
        title: "Canvas",
        type: "Canvas"
      }
    }
  },
  dependencies: {
    npm: {
      canvas: require('canvas')
    }
  },
  fn: function createCanvas(input, $, output, state, done, cb, on, canvas) {
    var r = function() {
      output({
        canvas: $.create(canvas.createCanvas())
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