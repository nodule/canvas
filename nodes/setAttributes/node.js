on.input.in = function() {
  for(var k in data) {
    input.context[k] = data[k];
  }
  output({
    context: input.context
  });
};
