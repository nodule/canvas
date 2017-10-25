output = function() {
  cb({
    out: $.create(canvas.createCanvas($.width, $.height))
  });
  done();
};
