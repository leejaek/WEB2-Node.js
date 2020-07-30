//JavaScript의 내장 함수 (math.round - 반올림)
console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1

//함수는 입력값을 가짐
//입력값을 받기 위해서는 매개변수가 필요하다.

function sum(first, second){ //Parameter Variable: 매개변수 (입력값요소를 받아 함수에 전달)
  console.log(first); //2
  console.log(first+second); //6
}

sum(2,4) //argument: 입력값 요소

///함수 출력 ///

console.log(Math.round(1.6));
//filewrite('result.txt', Math.round(1.6));
//email('egoing@aaa.com', Math.round(1.6));

//위와 같이 함수 출력값을 활용하기 위해서는 return 값을 return 하도록함

function sum(first, second){
  return first + second; //return 시점에서 함수가 종료됨
}
