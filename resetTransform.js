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
        fn: function __CONTEXT__(data, source, state, input, $, output) {
          var r = function() {
            $.context.resetTransform();
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