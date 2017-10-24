on.input.in = function() {
  var args = [$.image];

  if($.args.sx && $.args.sy && $.args.sw && $.args.sh) {
    args.push($.args.sx);
    args.push($.args.sy);
    args.push($.args.sw);
    args.push($.args.sh);
  }

  args.push($.args.dx || 0);
  args.push($.args.dy || 0);

  if($.args.dw) {
    args.push($.args.dw);
    if($.args.dh) {
      args.push($.args.dh);
    }
  }

  $.in.drawImage.apply($.in, args);
  output({
    out: $.get('in')
  });
};
