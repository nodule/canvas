module.exports = {
  name: "moveTo",
  ns: "canvas",
  async: true,
  title: "Move To",
  description: "Moves the starting point of a new subpath to the (x, y) coordinates",
  phrases: {
    active: "Moving"
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
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.context.moveTo($.in.x, $.in.y);
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