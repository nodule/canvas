module.exports = {
  name: "setLineDash",
  ns: "canvas",
  async: true,
  title: "Set Line Dash",
  description: "Set Line Dash",
  phrases: {
    active: "Setting line dash"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: "true"
      },
      segment: {
        title: "Segment",
        description: "An even number of non-negative numbers specifying a dash list.",
        type: "array",
        async: true,
        required: "true",
        fn: function __SEGMENT__(data, source, state, input, $, output) {
          var r = function() {
            $.context.setLineDash($.segment);
            output({
              context: $.get('context')
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