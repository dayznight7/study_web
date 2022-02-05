var heading = document.querySelector("#heading");
heading.onclick = function() {
  heading.style.color = "red";
}

// 알림창
alert("Hello Javascript!!!");

// 확인취소창
var reply = confirm("Really?");

// 입력
var name = prompt("write your name", "tom");

// 화면 출력
document.write("<h1>hello</h1>");
document.write("<b><big>" + name + "</big></b>님, 환영합니다");

// 콘솔창 출력
console.log(name + "님, 환영합니다");