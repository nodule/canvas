on.input.context = function() {
  $.context.commit();
  output({ context: $.get('context') });
};
