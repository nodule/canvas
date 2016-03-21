on.input.context = function() {
  $.context.save();
  output({ context: $.get('context') });
};
