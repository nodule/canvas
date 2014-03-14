on.input.in = function() {
  input.context.moveTo(data.x, data.y);
  output({
    context: input.context,
    out: data
  });
};
