on.input.in = function() {
  for(var k in input.in) {
    input.context[k] = input.in[k];
  }
  output({
    context: input.context
  });
};
