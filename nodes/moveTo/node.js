on.input.in = function() {
  $.context.moveTo($.in.x, $.in.y);
  output({
    context: $.get('context'),
    out: $.get('in')
  });
};
