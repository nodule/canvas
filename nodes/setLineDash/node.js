on.input.segment = function() {
  input.context.setLineDash(input.segment);
  output({
    context: input.context
  });
};
