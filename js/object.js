var now = new Date();

document.write(now.toLocaleString() + "<br>");

var myArr = new Array();
myArr =Array(1,2,3,4,5);
document.write("myArr : " + myArr + "<br>");

var myArr2 = Array('a', 'b', 'c', 'd', 'e');
document.write("myArr2 : " + myArr2 + "<br>");
document.write("myArr.concat(myArr2) : " + myArr.concat(myArr2) + "<br>");

var myStr = myArr.join('//');
document.write("myArr.join('//') : " + myStr + "<br><br>");


var nums = [1,2,3];
document.write("nums : " + nums + "<br>");
nums.push(4,5);
document.write("nums.push(4,5) : " + nums + "<br>");
nums.unshift(-1,0);
document.write("nums.unshift(-1,0) : " + nums + "<br>");

document.write("nums.pop() : " + nums.pop() + "<br>");
document.write("nums.pop() : " + nums.pop() + "<br>");
document.write("nums.shift() : " + nums.shift() + "<br>");
document.write("nums.shift() : " + nums.shift() + "<br>");

document.write("nums : " + nums + "<br>");

nums = [1,2,3,4,5,6,7,8];
document.write("nums : " + nums + "<br>");

var newnums = nums.splice(2);
document.write("newnums = nums.splice(2) : " + newnums + "<br>");
document.write("nums : " + nums + "<br>");

nums = [1,2,3,4,5,6,7,8];
newnums = nums.splice(3,4);
document.write("newnums = nums.splice(3,4) : " + newnums + "<br>");
document.write("nums : " + nums + "<br>");

nums = [1,2,3,4,5,6,7,8];
newnums = nums.splice(3,0,9,9,9);
document.write("newnums = nums.splice(3,0,9,9,9) : " + newnums + "<br>");
document.write("nums : " + nums + "<br>");

nums = [1,2,3,4,5,6,7,8];
newnums = nums.slice(3,6);
document.write("newnums = nums.slice(3,6) : " + newnums + "<br>");
document.write("nums : " + nums + "<br>");

document.write(Math.random() + "<br>");