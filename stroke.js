module.exports = {
  name: "stroke",
  ns: "canvas",
  async: true,
  title: "Stroke",
  description: "Stroke",
  phrases: {
    active: "Stroking path"
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
            $.context.stroke();
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