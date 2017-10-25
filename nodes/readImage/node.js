output = function() {
  var image = new $.module.Image()
  image.src = fs.readFileSync($.path)

  cb({
    out: $.write('path', image)
  });
};
