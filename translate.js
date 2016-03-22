module.exports = {
  name: "translate",
  ns: "canvas",
  async: true,
  title: "Translate",
  description: "Moves the origin point of the context to (x, y)",
  phrases: {
    active: "Translating context"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: "true"
      },
      "in": {
        title: "Point",
        async: true,
        type: "object",
        required: "true",
        properties: {
          x: {
            type: "number",
            title: "X"
          },
          y: {
            type: "number",
            title: "Y"
          }
        },
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            $.context.translate($.in.x, $.in.y);
            output({
              context: $.get('context'),
              out: $.get('in')
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
      },
      out: {
        title: "Point",
        type: "array"
      }
    }
  },
  state: {}
}