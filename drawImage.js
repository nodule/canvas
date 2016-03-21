module.exports = {
  name: "drawImage",
  ns: "canvas",
  async: true,
  title: "Draw Image",
  description: "",
  phrases: {
    active: "Drawing image"
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
        type: "HTMLElement",
        required: true
      },
      "in": {
        title: "Dimensions",
        async: true,
        type: "object",
        properties: {
          dx: {
            title: "Destination X",
            type: "number",
            description: "The X coordinate in the destination canvas at which to place the top-left corner of the source image."
          },
          dy: {
            title: "Destination Y",
            type: "number",
            description: "The Y coordinate in the destination canvas at which to place the top-left corner of the source image."
          },
          dw: {
            title: "Destination Width",
            type: "number",
            description: "The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.",
            required: false
          },
          dh: {
            title: "Destination Height",
            type: "number",
            description: "The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.",
            required: false
          },
          sx: {
            title: "Source X",
            type: "number",
            description: "The X coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.",
            required: false
          },
          sy: {
            title: "Source Y",
            type: "number",
            description: "The Y coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.",
            required: false
          },
          sw: {
            title: "Source Width",
            type: "number",
            description: "The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used. If you specify a negative value, the image is flipped horizontally when drawn.",
            required: false
          },
          sh: {
            title: "Source Height",
            type: "number",
            description: "The height of the sub-rectangle of the source image to draw into the destination context. If you specify a negative value, the image is flipped vertically when drawn.",
            required: false
          }
        },
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            var args = [input.element];

            if (data.sx && data.sy && data.sw && data.sh) {
              args.push(data.sx);
              args.push(data.sy);
              args.push(data.sw);
              args.push(data.sh);
            }

            args.push(data.dx || 0);
            args.push(data.dy || 0);

            if (data.dw) {
              args.push(data.dw);
              if (data.dh) {
                args.push(data.dh);
              }
            }

            input.context.drawImage.apply(input.context, args);
            output({
              context: input.context
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