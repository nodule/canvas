on.input.context = function() {
  output({
    out: $.create($.context.getLineDash()),
    context: $.get('context')
  });
};
