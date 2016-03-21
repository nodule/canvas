on.input.context = function() {
  input.context.strokeText(input.text, input.x, input.y);
  output({ context: input.context });
};
