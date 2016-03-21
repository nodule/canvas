on.input.in = function() {
  $.context.translate($.in.x, $.in.y);
  output({
    context: $.get('context'),
    out: $.get('in')
  });
};
