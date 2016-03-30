module.exports = {
  name: "scale",
  ns: "canvas",
  async: true,
  title: "Scale",
  description: "Scale",
  phrases: {
    active: "Scaling"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: "true"
      },
      "in": {
        title: "Scaling factor x/y",
        async: true,
        type: "array",
        required: "true",
        items: [{
          type: "number",
          title: "X"
        }, {
          type: "number",
          title: "Y"
        }],
        minItems: 2,
        maxItems: 2,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            $.context.scale($.in[0], $.in[1]);
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