on.input.element = function() {
  output({
    out: input.context.createImageData(data, input.repetition),
    context: input.context
  });
};
