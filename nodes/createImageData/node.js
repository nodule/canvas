on.input.in = function() {
  input.context.createImageData(data[0], data[1]);
  output({
    context: input.context,
    out: data
  });
};
