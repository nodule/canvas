module.exports = {
  name: "clip",
  ns: "canvas",
  async: true,
  title: "Clip",
  description: "Clip",
  phrases: {
    active: "Clipping"
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
            data.clip();
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