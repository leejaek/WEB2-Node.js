//동기와 비동,

var fs = require('fs');

/*
//readFileSync - 동기적
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

//readFile - 비동기적
console.log('A');
//readFileSync는 Return값이 있지만, readFile은 Return 값을 주지 않음
//function()를 세번째 인자로 주면 readFile 작업이 끝나면 function()을 실행
//readFile 작업에서 문제가 발생하면 err, 아니면 File의 Result를 반환
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});
console.log('C');
