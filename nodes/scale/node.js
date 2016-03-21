on.input.in = function() {
  $.context.scale($.in[0], $.in[1]);
  output({ context: $.get('context') });
};
