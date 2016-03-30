module.exports = {
  name: "createPattern",
  ns: "canvas",
  async: true,
  title: "Create Pattern",
  description: "A DOM element to use as the source image for the pattern. This can be any element, although typically you'll use an Image or <canvas>",
  phrases: {
    active: "Creating pattern"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: "true"
      },
      element: {
        title: "Element",
        async: true,
        type: "HTMLElement",
        fn: function __ELEMENT__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.create($.context.createImageData($.element, $.repetition)),
              context: $.get('context')
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      repetition: {
        title: "Repetition",
        "enum": ["repeat",
          "repeat-x",
          "repeat-y",
          "no-repeat"
        ]
      }
    },
    output: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D"
      },
      out: {
        title: "Object",
        type: "object"
      }
    }
  },
  state: {}
}