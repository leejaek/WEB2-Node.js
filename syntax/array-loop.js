//어떤 데이터 세트를 가정
var number = [1, 400, 12, 34, 5];

//위 데이터의 원소를 하나씩 꺼내는 기능
var i = 0
while(i < 5){
  console.log(number[i]);
  i = i + 1;
} // 1, 400, 12, 34, 5
//Warning: 위 코드의 문제는 배열의 길이를 5로 정적으로 고정시켜 두었기 때문에 데이터 세트 수정시 오류가 발생
var i = 0
while(i < number.length){
  console.log(number[i]);
  i = i + 1;
} // 1, 400, 12, 34, 5

//위 데이터의 원소를 모두 더하는 기능
var i = 0
var total = 0
while(i < number.length){
  total = total + number[i];
  i = i + 1;
}

console.log(`total : ${total}`) // total : 452
