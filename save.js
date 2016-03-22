module.exports = {
  name: "save",
  ns: "canvas",
  async: true,
  title: "Save",
  description: "Save Context",
  phrases: {
    active: "Saving context"
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
            $.context.save();
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