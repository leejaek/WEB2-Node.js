//data를 관리하기 용이하게 하는 도구 array, object
//data 처리가 많아지면 서로 연관된 처리 방법을 모아 함수를 활용
/*function f1(){
  console.log(1+1);
  console.log(1+2);
}*/

//JavaScript의 함수는
//1. 처리해야할 일에 대한 정보를 담고 있는 구문인 동시에
//2. 값의 성질을 가지고 있음 [함수를 변수에 넣을 수 있다면 그것은 함수의 성질을 가지고 있는 것]

//var i = if (true{console.log(1)}) //error -> if문은 값이 아니기 때문에 변수 i에 넣을 수 없음
//var w = while(true{conlog.log(1)}) //while문 또한 값이 아니기 때문에 변수 i에 넣을 수 없음

var f = function (){
  console.log(1+1);
  console.log(1+2);
}
/*console.log(f);
f()*/

//위의 내용은 실행됨 : function이 값을 가지며 var f에 들어감

//배열의 원소로써 함수가 존재할 수 있음
var a = [f] // 배열에 f라는 원소가 담겨있으며, f는 함수이다. //
a[0](); //a배열의 첫 원소인 f가 실행됨

//객체(object)의 원소로써 함수가 존재할 수 있음
var o = {
  func:f
}

o.func(); //객체 o에서 func를 찾아 불러오며, f를 실행함

//즉, 함수를 배열과 객체에 담을 수 있다.
