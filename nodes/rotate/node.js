on.input.angle = function() {
  input.context.rotate(data);
  output({
    context: input.context,
    rotation: input.context.attrs.rotation
  });
};
