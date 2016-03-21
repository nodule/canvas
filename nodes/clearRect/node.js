on.input.context = function() {
  input.context.clearRect(input.x, input.y, input.width, input.height);
  output({ context: input.context });
};
