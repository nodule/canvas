on.input.element = function() {
  output({
    out: $.create($.context.createImageData($.element, $.repetition)),
    context: $.get('context') 
  });
};
