on.input.context = function() {
  $.context.resetTransform();
  output({ context: $.get('context') });
};
