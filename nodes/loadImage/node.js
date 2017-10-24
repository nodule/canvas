output = function() {
  canvas.loadImage($.path).then(function(image) {
    cb({
      out: $.write('path', image)
    });
    done();
  })
  .catch(function (error) {
    cb({
      error: $.write('path', error)
    });
    done();
  });
};
