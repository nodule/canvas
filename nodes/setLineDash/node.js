on.input.segment = function() {
  $.context.setLineDash($.segment);
  output({
    context: $.context
  });
};
