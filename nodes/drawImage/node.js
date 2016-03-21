on.input.in = function() {

  var args = [input.element];

  if(input.in.sx && input.in.sy && input.in.sw && input.in.sh) {
    args.push(input.in.sx);
    args.push(input.in.sy);
    args.push(input.in.sw);
    args.push(input.in.sh);
  }

  args.push(input.in.dx || 0);
  args.push(input.in.dy || 0);

  if(input.in.dw) {
    args.push(input.in.dw);
    if(input.in.dh) {
      args.push(input.in.dh);
    }
  }

  input.context.drawImage.apply(input.context, args);
  output({
    context: input.context
  });

};
