// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var b = new Array();
for(var n in a){
  b.push(a[n]*2);
}
console.log(b);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var str = "";
while(colors.length>0){
  //case 1
  //str+=colors.shift()+" ";
  //case 2
  //str+=colors.shift()+"+";
  //case 3
  str+=colors.shift()+",";
}
console.log(str.substring(0,str.length-1));

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function numbersort(x,y){
  return y-x;
}
a.sort(numbersort);
console.log(a);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var elems = new Array();
var maxnum = 0;
var maxelem = "";
for(var i =0;i<a.length;i++){
  var elem = a[i];
  elems[elem] === undefined ? elems[elem]=1:elems[elem]++;
  if(elems[elem]>maxnum){
    maxelem = elem;
    maxnum = elems[elem];
  }
}
console.log("数组中出现频率最高的元素是："+ maxelem +"，出现次数："+maxnum);