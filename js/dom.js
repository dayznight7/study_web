var now = new Date();

function inntext() {
  var now = new Date();
  document.getElementById("current").innerText = now;
}

function innhtml() {
  var now = new Date();
  document.getElementById("current").innerHTML = "<em>" + now + "</em>"
}

function changeiu() {
  var msrc1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBbgtBhP98gJb3heDiu7Q5Mv1JloJS3Zs-A&usqp=CAU";
  var msrc2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY1LF8wV4H9Wxn1kTfn8xJBTcKh-LOmfFhw&usqp=CAU";
  var iuimg = document.querySelector("#iu1");
  var msrc = iuimg.getAttribute("src");
  if (msrc == msrc1) { iuimg.setAttribute("src", msrc2); }
  if (msrc == msrc2) { iuimg.setAttribute("src", msrc1); }
}

var iuimg2 = document.querySelector("#iu1");
iuimg2.onclick = changeiu;


var mvimg = document.querySelector("#mv1");
mvimg.onclick = myevent;

function myevent(event) {
  alert("X: " + event.screenX + "Y: " + event.screenY);
}

function myevent2(event) {
  mvimg2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOq-FNOPm9HJ07bxD0eFE-0zUyDEwVszemYH-8RV-2GOHaMvYn0U1e_x882TW3RjcUsw&usqp=CAU";
}

function myevent3(event) {
  mvimg2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQGC7MDgNNLFBJ4ZMcj3ZDmThrIrexCQkPA&usqp=CAU";
}

var mvimg2 = document.querySelector("#mv2");
mvimg2.addEventListener("mouseover", myevent2);
mvimg2.addEventListener("mouseout", myevent3);
document.getElementById("ctime").style.color = "blue";

var myrect = document.querySelector("#box4");
myrect.addEventListener("mouseover", function() {
  myrect.style.backgroundColor = "green";
  myrect.style.borderRadius = "50%";
});
myrect.addEventListener("mouseout", function() {
  myrect.style.backgroundColor = "";
  myrect.style.borderRadius = "";
});
