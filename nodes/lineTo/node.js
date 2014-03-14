on.input.in = function() {
  input.context.lineTo(data.x, data.y);
  output({
    context: input.context,
    out: data
  });
};
