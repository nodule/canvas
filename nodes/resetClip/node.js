on.input.context = function() {
  $.context.resetClip();
  output({ context: $.get('context') });
};
