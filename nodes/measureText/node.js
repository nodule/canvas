on.input.text= function() {
  output({
    metrics: input.context.measureText(data),
    context: input.context
  });
};
