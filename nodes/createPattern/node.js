on.input.element = function() {
  output({
    out: $.context.createImageData($.element, $.repetition),
    context: $.context
  });
};
