module.exports = {
  name: "createImageData",
  ns: "canvas",
  async: true,
  title: "Create Image Data",
  description: "Creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black",
  phrases: {
    active: "Creating image data"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: "true"
      },
      image: {
        title: "imagedata",
        type: "ImageData"
      },
      "in": {
        title: "Dimensions",
        async: true,
        type: "object",
        items: {
          width: {
            type: "number",
            title: "Width"
          },
          height: {
            type: "number",
            title: "Height"
          }
        },
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            $.context.createImageData($.width, $.height);
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