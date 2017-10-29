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
        type: "CanvasRenderingContext2D"
      },
      image: {
        title: "Image",
        type: ["HTMLElement",
          "Image"
        ],
        async: true,
        fn: function __IMAGE__(data, source, state, input, $, output) {
          var r = function() {
            var args = [$.image];

            if ($.args.sx && $.args.sy && $.args.sw && $.args.sh) {
              args.push($.args.sx);
              args.push($.args.sy);
              args.push($.args.sw);
              args.push($.args.sh);
            }

            args.push($.args.dx || 0);
            args.push($.args.dy || 0);

            if ($.args.dw) {
              args.push($.args.dw);
              if ($.args.dh) {
                args.push($.args.dh);
              }
            }

            $.context.drawImage.apply($.context, args);
            output({
              context: $.get('context')
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      args: {
        title: "Dimensions",
        type: "object",
        properties: {
          dx: {
            title: "Destination X",
            type: "number",
            description: "The X coordinate in the destination canvas at which to place the top-left corner of the source image.",
            "default": 0
          },
          dy: {
            title: "Destination Y",
            type: "number",
            description: "The Y coordinate in the destination canvas at which to place the top-left corner of the source image.",
            "default": 0
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