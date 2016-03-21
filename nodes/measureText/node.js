on.input.text= function() {
  output({
    metrics: input.context.measureText(input.text),
    context: input.context
  });
};
