on.input.context = function() {
  $.context.beginPath();
  output({ context: $.get('context') });
};
