on.input.segment = function() {
  input.context.setLineDash(data);
  output({
    context: input.context
  });
};
