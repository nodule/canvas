on.input.in = function() {
  for(var k in $.in) {
    $.context[k] = $.in[k];
  }
  output({
    context: $.get('context')
  });
};
