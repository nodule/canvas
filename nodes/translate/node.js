on.input.in = function() {
  input.context.translate(data.x, data.y);
  output({
    context: input.context,
    out: data
  });
};
