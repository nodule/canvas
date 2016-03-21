on.input.in = function() {
  $.context.createImageData($.width, $.height);
  output({
    context: $.get('context'),
    out: $.get('in')
  });
};
