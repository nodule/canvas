module.exports = {
  name: "measureText",
  ns: "canvas",
  async: true,
  title: "Measure Text",
  description: "Measure Text",
  phrases: {
    active: "Measuring text"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: true
      },
      text: {
        title: "Text",
        type: "string",
        async: true,
        required: true,
        fn: function __TEXT__(data, source, state, input, $, output) {
          var r = function() {
            output({
              metrics: $.create($.context.measureText($.text)),
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
      },
      metrics: {
        title: "Text Metrics",
        type: "nsIDOMTextMetrics"
      }
    }
  },
  state: {}
}