module.exports = {
  name: "restore",
  ns: "canvas",
  async: true,
  title: "Restore",
  description: "Restore Context",
  phrases: {
    active: "Restoring"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: true,
        fn: function __CONTEXT__(data, source, state, input, $, output) {
          var r = function() {
            $.context.restore();
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