module.exports = {
  name: "rotate",
  ns: "canvas",
  async: true,
  title: "Rotate",
  description: "Rotate Context",
  phrases: {
    active: "Rotating"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: "true"
      },
      angle: {
        title: "Angle",
        async: true,
        type: "number",
        required: "true",
        fn: function __ANGLE__(data, x, source, state, input, output) {
          var r = function() {
            input.context.rotate(data);
            output({
              context: input.context
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