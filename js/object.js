var now = new Date();

document.write(now.toLocaleString() + "<br>");

var myArr = new Array();
myArr =Array(1,2,3,4,5);
document.write("myArr : " + myArr + "<br>");

var myArr2 = Array('a', 'b', 'c', 'd', 'e');
document.write("myArr2 : " + myArr2 + "<br>");
document.write("myArr.concat(myArr2) : " + myArr.concat(myArr2) + "<br>");

var myStr = myArr.join('//');
document.write("myArr.join('//') : " + myStr + "<br>");