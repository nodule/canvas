on.input.context = function() {
  $.context.clearRect($.x, $.y, $.width, $.height);
  output({ context: $.context });
};
