/*
function a(){
  console.log('A');
}
a();

//익명함수
function a(){
  console.log('A');
}*/

//함수의 값을 변수로 저장
var a = function(){
  console.log('A');
}

function slowfunc(callback){
  //오래 걸리는 함수로 가정
  callback();
}

//slowfunc라는 장시간 소요되는 함수가 시작 callback parameter는 a함수 값을 가지게 되어 'A'를 출력
slowfunc(a);
