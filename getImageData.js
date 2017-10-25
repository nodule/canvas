module.exports = {
  name: "getImageData",
  ns: "canvas",
  title: "Get Image Data",
  description: "Get Image Data",
  phrases: {
    active: "Getting image data"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D"
      },
      sx: {
        title: "Sx",
        type: "number",
        description: "The x coordinate of the upper left corner of the rectangle from which the ImageData will be extracted."
      },
      sy: {
        title: "Sy",
        type: "number",
        description: "The y coordinate of the upper left corner of the rectangle from which the ImageData will be extracted."
      },
      sw: {
        title: "Sw",
        type: "number",
        description: "The width of the rectangle from which the ImageData will be extracted."
      },
      sh: {
        title: "Sh",
        type: "number",
        description: "The height of the rectangle from which the ImageData will be extracted."
      }
    },
    output: {
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D"
      },
      out: {
        title: "ImageData",
        type: "ImageData"
      }
    }
  },
  fn: function getImageData(input, $, output, state, done, cb, on) {
    var r = function() {
      output({
        context: $.get('context'),
        out: $.create($.context.getImageData($.sx, $.sy, $.sw, $.sh))
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}