output = function() {
  const props = ['dx', 'dy', 'dirtyX', 'dirtyY', 'dirtyWidth', 'dirtyHeight'];
  
  const args = [$.in];
  
  for (let i = 0; i < props.length; i++) {
    if ($[props[i]] === undefined) break;
    
    args.push($[props[i]])
  }
  
  $.context.putImageData.apply($.context, args);
  
  cb({
    context: $.get('context'),
    out: $.get('in')
  });
};
