window.open("browser2.html", "pop", "width=500, height=400, left=100, top=200");

function openPopup() {
  var newWin = window.open("browser2.html", "pop", "width=500, height=400");
  if (newWin == null) {
    alert("팝업이 차단되어 있습니다 팝업 차단을 해제해 주세요");
  }
  newWin.moveBy(100,100);
}

openPopup();

document.write("screen.availWidth : " + screen.availWidth + "<br>");
document.write("screen.availHeight : " + screen.availHeight + "<br>");
document.write("screen.width : " + screen.width + "<br>");
document.write("screen.height : " + screen.height + "<br>");