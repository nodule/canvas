on.input.in = function() {

  var args = [input.element];

  if(data.sx && data.sy && data.sw && data.sh) {
    args.push(data.sx);
    args.push(data.sy);
    args.push(data.sw);
    args.push(data.sh);
  }

  args.push(data.dx || 0);
  args.push(data.dy || 0);

  if(data.dw) {
    args.push(data.dw);
    if(data.dh) {
      args.push(data.dh);
    }
  }

  input.context.drawImage.apply(input.context, args);
  output({
    context: input.context
  });

};
