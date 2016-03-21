on.input.in = function() {
  $.context.createImageData($.width, $.height);
  output({
    context: $.context,
    out: $.in
  });
};
