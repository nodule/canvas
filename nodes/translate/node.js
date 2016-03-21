on.input.in = function() {
  $.context.translate($.in.x, $.in.y);
  output({
    context: $.context,
    out: $.in
  });
};
