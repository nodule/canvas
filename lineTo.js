module.exports = {
  name: "lineTo",
  ns: "canvas",
  async: true,
  title: "Line To",
  description: "Connects the last point in the subpath to the x, y coordinates with a straight line",
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
            title: "X",
            description: "The x axis of the coordinate for the end of the line"
          },
          y: {
            type: "number",
            title: "Y",
            description: "The y axis of the coordinate for the end of the line"
          }
        },
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            $.context.lineTo($.in.x, $.in.y);
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