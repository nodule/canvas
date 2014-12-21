module.exports = {
  name: "resetTransform",
  ns: "canvas",
  async: true,
  title: "Reset Transform",
  description: "Reset Transform",
  phrases: {
    active: "Resetting clip"
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
            data.resetTransform();
            output({
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
      }
    }
  },
  state: {}
}