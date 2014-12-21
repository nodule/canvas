module.exports = {
  name: "getLineDash",
  ns: "canvas",
  async: true,
  title: "Get Line Dash",
  description: "Get Line Dash",
  phrases: {
    active: "Getting line dash"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        async: true,
        type: "CanvasRenderingContext2D",
        required: "true",
        fn: function __CONTEXT__(data, x, source, state, input, output) {
          var r = function() {
            output({
              out: data.getLineDash(),
              context: data
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
      },
      out: {
        title: "Segment",
        type: "array"
      }
    }
  },
  state: {}
}