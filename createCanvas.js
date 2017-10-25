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
      module: {
        title: "Canvas Module",
        type: "function"
      },
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
  fn: function createCanvas(input, $, output, state, done, cb, on) {
    var r = function() {
      output({
        out: $.create($.module.createCanvas())
      });
      done();
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}