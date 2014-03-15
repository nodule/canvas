on.input.in = function() {
  input.context.createImageData(input.width, input.height);
  output({
    context: input.context,
    out: data
  });
};
