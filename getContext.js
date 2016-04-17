module.exports = {
  name: "getContext",
  ns: "canvas",
  async: true,
  title: "Get Context",
  description: "Get Canvas Context",
  phrases: {
    active: "Getting context"
  },
  ports: {
    input: {
      canvas: {
        title: "Canvas",
        async: true,
        type: "HTMLElement",
        required: true,
        fn: function __CANVAS__(data, source, state, input, $, output) {
          var r = function() {
            output({
              context: $.create($.canvas.getContext('2d'))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D"
      }
    }
  },
  state: {}
}