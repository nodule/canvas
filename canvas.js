module.exports = {
  name: "canvas",
  ns: "canvas",
  title: "Canvas module",
  description: "Provides the canvas module while multiple requires from different locations won't work",
  phrases: {
    active: "Requiring canvas module"
  },
  ports: {
    input: {},
    output: {
      module: {
        title: "Canvas",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      canvas: require('canvas')
    }
  },
  fn: function canvas(input, $, output, state, done, cb, on, canvas) {
    var r = function() {
      module: $.create(canvas, 'function')
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}