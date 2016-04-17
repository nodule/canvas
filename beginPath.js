module.exports = {
  name: "beginPath",
  ns: "canvas",
  async: true,
  title: "Begin Path",
  description: "Begin path",
  phrases: {
    active: "Beginning path"
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
            $.context.beginPath();
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