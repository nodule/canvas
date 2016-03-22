module.exports = {
  name: "commit",
  ns: "canvas",
  async: true,
  title: "Commit",
  description: "Commit Context",
  phrases: {
    active: "Committing context"
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
            $.context.commit();
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