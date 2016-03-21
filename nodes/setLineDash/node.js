on.input.segment = function() {
  $.context.setLineDash($.segment);
  output({
    context: $.get('context')
  });
};
