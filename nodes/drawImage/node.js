on.input.in = function() {

  var args = [$.element];

  if($.in.sx && $.in.sy && $.in.sw && $.in.sh) {
    args.push($.in.sx);
    args.push($.in.sy);
    args.push($.in.sw);
    args.push($.in.sh);
  }

  args.push($.in.dx || 0);
  args.push($.in.dy || 0);

  if($.in.dw) {
    args.push($.in.dw);
    if($.in.dh) {
      args.push($.in.dh);
    }
  }

  $.context.drawImage.apply($.context, args);
  output({
    context: $.context
  });

};
