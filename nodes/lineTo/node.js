on.input.in = function() {
  $.context.lineTo($.in.x, $.in.y);
  output({
    context: $.context,
    out: $.in
  });
};
