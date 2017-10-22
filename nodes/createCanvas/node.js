output = function() {
  cb({
    canvas: $.create(canvas.createCanvas())
  });
  done();
};
