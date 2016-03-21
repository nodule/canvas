on.input.angle = function() {
  $.context.rotate($.angle);
  output({
    context: $.get('context')
  });
};
