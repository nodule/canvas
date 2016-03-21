on.input.text= function() {
  output({
    metrics: $.context.measureText($.text),
    context: $.context
  });
};
