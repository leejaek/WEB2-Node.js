//반복문: 특정 명령을 반복해야하는 경우에 활용
//while문 : 자유도가 높음, 기초적

console.log('A');
console.log('B');

//while의 ()안은 if와 마찬가지로 boolean 값이 들어옴
//아래와 같이 코딩될 경우 무한루프가 나타남 - 치명적인 버그!
/* while(true){
  console.log('C1');
  console.log('C2');
} */

var i = 0;

while(i<2){
  console.log('C1');
  console.log('C2');
  i = i+1;
} // C1 C2 C1 C2

console.log('D');
