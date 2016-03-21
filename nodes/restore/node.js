on.input.context = function() {
  input.context.restore();
  output({
    context: input.context
  });
};
