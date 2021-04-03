var socket = io();

socket.on('color', msg => {
  if(isColor(msg)){
  addCell(msg)
  }
});

function isColor(strColor){
  const regex = new RegExp('^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$')
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor || regex.test(strColor);
}