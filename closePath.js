module.exports = {
  name: "closePath",
  ns: "canvas",
  async: true,
  title: "Close Path",
  description: "Close path",
  phrases: {
    active: "Closing path"
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
            $.context.closePath();
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