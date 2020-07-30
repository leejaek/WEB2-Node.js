// 중복의 발생 -> 유지보수 어려움, 코드 가독성 저하
// 중복 발생의 해결 -> 반복문, 조건문 등 사용 + 함수

f123();
console.log('A');
console.log('Z');
console.log('B');
f123();
console.log('F');
console.log('C');
console.log('P');
console.log('J');
f123();
console.log('U');
console.log('A');
console.log('J');
console.log('I');
f123();

//함수: 일련의 명령에 대해 이름을 붙이는 것

//함수 정의
function f123(){
  console.log(1);
  console.log(2);
  console.log(3);
}
