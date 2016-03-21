on.input.element = function() {
  output({
    out: input.context.createImageData(input.element, input.repetition),
    context: input.context
  });
};
