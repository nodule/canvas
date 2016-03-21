on.input.context = function() {
  $.context.closePath();
  output({ context: $.get('context') });
};
