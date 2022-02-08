function myadd(a, b) {
  var sum = a + b;
  alert(sum);
}

myadd(3,4);

let name = "let name";
console.log(name);
name = "let name twice";
console.log(name);

const pi = 3.14;
console.log(pi);

function myauto(str1, str2=" hello", str3=" function") {
  return str1 + str2 + str3;
}

console.log(myauto("js"));
console.log(myauto("js"," jsjs"));

var sum = function(a, b) {
  return a + b;
}

document.write("함수 실행 결과: " + sum(10, 20));

const hi = () => " 안녕하세요 ";
let hihi = (a, b) => a + b;

document.write(hi);
document.write(hihi("hello"," javascript"));