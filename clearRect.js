module.exports = {
  name: "clearRect",
  ns: "canvas",
  async: true,
  title: "Clear Rectangle",
  description: "Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black.",
  phrases: {
    active: "Clearing rectangle"
  },
  ports: {
    input: {
      context: {
        title: "Context",
        async: true,
        type: "CanvasRenderingContext2D",
        required: "true",
        fn: function __CONTEXT__(data, x, source, state, input, output) {
          var r = function() {
            $.context.clearRect($.x, $.y, $.width, $.height);
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
      x: {
        title: "X",
        type: "number",
        description: "The x axis of the coordinate for the rectangle starting point."
      },
      y: {
        title: "Y",
        type: "number",
        description: "The y axis of the coordinate for the rectangle starting point."
      },
      width: {
        title: "Width",
        type: "number",
        description: "The rectangle's width."
      },
      height: {
        title: "Height",
        type: "number",
        description: "The rectangle's height."
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