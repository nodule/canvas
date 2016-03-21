on.input.context = function() {
  $.context.strokeText($.text, $.x, $.y);
  output({ context: $.get('context') });
};
