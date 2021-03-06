module.exports = {
  name: "setAttributes",
  ns: "canvas",
  async: true,
  title: "Set Attributes",
  description: "Sets one or more attributes",
  phrases: {
    active: "Setting attributes"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D",
        required: true
      },
      "in": {
        title: "Attributes",
        type: "object",
        async: true,
        required: true,
        properties: {
          fillStyle: {
            type: "string",
            title: "Fill Style",
            description: "Color or style to use inside shapes. Default #000 (black).",
            format: "color",
            "default": "#000"
          },
          font: {
            type: "string",
            title: "Font",
            "default": "10px sans-serif"
          },
          globalAlpha: {
            type: "number",
            title: "Global Alpha",
            description: "globalAlpha float Alpha value that is applied to shapes and images before they are composited onto the canvas. Default 1.0 (opaque).",
            "default": 1
          },
          globalCompositeOperation: {
            title: "Global Composite Operation",
            description: "With globalAlpha applied this sets how shapes and images are drawn onto the existing bitmap.",
            "enum": ["source-atop",
              "source-in",
              "source-out",
              "source-over",
              "destination-atop",
              "destination-in",
              "destination-out",
              "destination-over",
              "lighter",
              "darker",
              "copy",
              "xor"
            ],
            "default": "source-over"
          },
          lineCap: {
            "enum": ["butt",
              "round",
              "square"
            ],
            title: "Line Cap",
            description: "Type of endings on the end of lines.",
            "default": "butt"
          },
          lineDashOffset: {
            type: "number",
            title: "Line Dash Offset",
            description: "Specifies where to start a dasharray on a line."
          },
          lineJoin: {
            "enum": ["miter",
              "round",
              "bevel"
            ],
            title: "Line Join",
            description: "Defines the type of corners where two lines meet.",
            "default": "miter"
          },
          lineWidth: {
            type: "number",
            title: "Line Width",
            description: "Width of lines",
            "default": 1
          },
          miterLimit: {
            type: "number",
            title: "Miter Limit",
            "default": 10
          },
          shadowBlur: {
            type: "number",
            title: "Shadow Blur",
            description: "float Specifies the blurring effect.",
            "default": 0
          },
          shadowColor: {
            type: "string",
            title: "Shadow Color",
            description: "Color of the shadow. Default fully-transparent black.",
            format: "color",
            "default": 0
          },
          shadowOffsetX: {
            type: "number",
            title: "Shadow Offset X",
            description: "Horizontal distance the shadow will be offset.",
            "default": 0
          },
          shadowOffsetY: {
            type: "number",
            title: "Shadow Offset Y",
            description: "Vertical distance the shadow will be offset.",
            "default": 0
          },
          strokeStyle: {
            type: "string",
            title: "Stroke style",
            description: "Color or style to use for the lines around shapes.",
            format: "color",
            "default": "#000"
          },
          textAlign: {
            "enum": ["start",
              "end",
              "left",
              "right",
              "center"
            ],
            title: "Text Align",
            "default": "start"
          },
          textBaseline: {
            "enum": ["top",
              "hanging",
              "middle",
              "alphabetic",
              "ideographic",
              "bottom"
            ],
            title: "Text Baseline",
            "default": "alphabetic"
          }
        },
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            for (var k in $.in) {
              $.context[k] = $.in[k];
            }
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