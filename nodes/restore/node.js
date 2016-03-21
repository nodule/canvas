on.input.context = function() {
  $.context.restore();
  output({
    context: $.get('context')
  });
};
