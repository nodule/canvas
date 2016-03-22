module.exports = {
  name: "strokeText",
  ns: "canvas",
  async: true,
  title: "Stroke Text",
  description: "Stroke Text",
  phrases: {
    active: "Stroking text"
  },
  ports: {
    input: {
      text: {
        title: "Text",
        type: "string",
        required: "true"
      },
      x: {
        title: "X",
        type: "number",
        required: "true",
        "default": 0
      },
      y: {
        title: "Y",
        type: "number",
        required: "true",
        "default": 0
      },
      context: {
        title: "Context",
        async: true,
        type: "CanvasRenderingContext2D",
        required: "true",
        fn: function __CONTEXT__(data, x, source, state, input, output) {
          var r = function() {
            $.context.strokeText($.text, $.x, $.y);
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