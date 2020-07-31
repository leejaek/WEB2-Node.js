//object3.js가 1억줄 짜리 코드라고 가정하며 장기간, 대규모 인원이 참여하는 프로젝트로 참여

/*var v1 = 'v1';
// 10000 code
v1 = 'egoing'; //수많은 코드 중에 누군가 v1을 다른이름으로 재정의하면 버그가 발생
var v2 = 'v2';*/

/*var o = {
  v1:'v1',
  v2:'v2'
}
//서로 연관된 값들을 하나의 객체안에 정리정돈할 수 있음

function f1(){
  console.log(o.v1);
}
//10000code
function f1(){
  console.log(0)
} //수많은 코드 중에 누군가 f1을 다른함수로 재정의하면 버그가 발생

function f2(){
  console.log(o.v2);
}

f1(); //v1
f2(); //v2*/

//위와 같은 상황에서 객체를 활용

var o = {
  v1:'v1',
  v2:'v2',
  f1:function f1(){
    console.log(o.v1); //객체 o (즉, 포함된 객체)를 참조 //객체 이름이 변경될 경우 참조가 끊김
  },
  f2:function f2(){
    console.log(this.v2); //함수가 포함된 객체를 자동으로 참조 //객체 이름이 변경되어도 참조가 자동으로 따라감
  }
}

o.f1();
o.f2();
