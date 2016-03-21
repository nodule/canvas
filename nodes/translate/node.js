on.input.in = function() {
  input.context.translate(input.in.x, input.in.y);
  output({
    context: input.context,
    out: input.in
  });
};
