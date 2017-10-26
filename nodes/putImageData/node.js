output = function() {
  $.context.putImageData($.in, $.dx, $.dy, $.dirtyX, $.dirtyY, $.dirtyWidth, $.dirtyHeight);
  
  cb({
    context: $.get('context'),
    out: $.get('in')
  });
};
