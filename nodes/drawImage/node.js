on.input.in = function() {

  var args = [input.image];

  if(data.sx && data.sy && data.sw &&  data.sh) {
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

  var res, error = null;
  try {
    res = input.context.drawImage.apply(null, args);
  } catch(e) {
    error = e;
  }

  if(error) {
    output({
      error: error,
      context: input.context,
    });
  } else {
    output({
      out: input.context.drawImage.apply(null, args),
      context: input.context,
    });
  }

};
