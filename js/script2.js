var num = prompt("input numer");
document.write(typeof num);

if (num % 3 === 0)  {
  document.write("<p><b>" + num + "</b> 은 3의 배수입니다</p>");
}
else {
  document.write("<p><b>" + num + "</b> 은 3의 배수가 아닙니다</p>");
}

switch (typeof num) {
  case "string": alert("string"); break;
  case "number": alert("number"); break;
  case "boolean": alert("boolean"); break;
  case "object": alert("object"); break;
}