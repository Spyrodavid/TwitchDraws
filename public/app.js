var socket = io();

socket.on('color', msg => {
  if(isColor(msg)){
  addCell(msg)
  }
});

function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  console.log(s.color)
  console.log(strColor)
  return s.color == strColor;
}