on.input.context = function() {
  data.clearRect({
    x: input.x,
    y: input.y,
    width: input.width,
    height: input.height
  });
  output({ context: data });
};
