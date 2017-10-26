module.exports = {
  name: "putImageData",
  ns: "canvas",
  title: "Put Image Data",
  description: "Put Image Data",
  phrases: {
    active: "Putting image data"
  },
  ports: {
    input: {
      "in": {
        title: "ImageData",
        type: "ImageData"
      },
      context: {
        title: "Context",
        type: "CanvasRenderingContext2D"
      },
      dx: {
        title: "Dx",
        type: "number",
        description: "Horizontal position (x-coordinate) in the source imagedata from which to start copying. Defaults to the top left of the whole image data.",
        "default": 0
      },
      dy: {
        title: "Dy",
        type: "number",
        description: "Vertical position (y-coordinate) in the source imagedata from which to start copying. Defaults to the top left of the whole image data.",
        "default": 0
      },
      dirtyX: {
        title: "Dirty X",
        type: "number",
        description: "Horizontal position (x-coordinate) of the upper-left corner at which to place the image data in the destination canvas.",
        required: false
      },
      dirtyY: {
        title: "Dirty Y",
        type: "number",
        description: "Vertical position (y-coordinate) of the upper-left corner at which to place the image in the destination canvas.",
        required: false
      },
      dirtyWidth: {
        title: "Dirty Width",
        type: "number",
        description: "Width of the rectangle to be painted. Defaults to the width of the image data.",
        required: false
      },
      dirtyHeight: {
        title: "Dirty Height",
        type: "number",
        description: "Height of the rectangle to be painted. Defaults to the height of the image data.",
        required: false
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
  fn: function putImageData(input, $, output, state, done, cb, on) {
    var r = function() {
      $.context.putImageData($.in, $.dx, $.dy, $.dirtyX, $.dirtyY, $.dirtyWidth, $.dirtyHeight);

      output({
        context: $.get('context'),
        out: $.get('in')
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