on.input.in = function() {
  $.context.lineTo($.in.x, $.in.y);
  output({
    context: $.get('context'),
    out: $.get('in')
  });
};
