on.input.in = function() {
  $.context.moveTo($.in.x, $.in.y);
  output({
    context: $.context,
    out: $.in
  });
};
