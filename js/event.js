function changeBg(color) {
  var result = document.querySelector('#result');
  result.style.backgroundColor = color;
}

function changeBg2() {
  var result = document.querySelector('#result');
  result.style.backgroundColor = "blue";
}

var btn = document.querySelector("#open")
btn.onclick = changeBg2;