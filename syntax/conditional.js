var args = process.argv;
console.log(args[2]);

console.log('A');
console.log('B');
//괄호안에는 true or false 둘 중 하나의 결과값은 반환
if(args[2] === '1'){
  //true 면 C1이 실행
  console.log('C1');
} else {
  //false 면 C2가 실행
  console.log('C2');
}
console.log('D');
