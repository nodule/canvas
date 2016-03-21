on.input.in = function() {
  input.context.lineTo(input.in.x, input.in.y);
  output({
    context: input.context,
    out: input.in
  });
};
