module.exports = {
  name: "fill",
  ns: "canvas",
  async: true,
  title: "Fill",
  description: "Fill Context",
  phrases: {
    active: "Filling context"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        async: true,
        type: "CanvasRenderingContext2D",
        required: true,
        fn: function __CONTEXT__(data, source, state, input, $, output) {
          var r = function() {
            $.context.fill();
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