on.input.text= function() {
  output({
    metrics: $.create($.context.measureText($.text)),
    context: $.get('context')
  });
};
