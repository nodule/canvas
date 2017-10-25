output = function() {
  cb({
    context: $.get('context'),
    out: $.create($.context.getImageData($.sx, $.sy, $.sw, $.sh))
  });
};
