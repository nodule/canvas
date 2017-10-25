output = function() {
  var image = new canvas.Image()
  image.src = fs.readFileSync($.path)

  cb({
    out: $.write('path', image)
  });
};
