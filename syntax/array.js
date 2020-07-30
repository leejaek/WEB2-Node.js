//배열
//배열 만들기(Create)
['A', 'B', 'C', 'D'];
//배열을 호출하기 위해서는 이름이 필요하다.
var arr = ['A', 'B', 'C', 'D'];

//배열 읽기(Read) arr[] 0부터 시작
console.log(arr[1]); // B
console.log(arr[3]); // D

//배열 수정(Update)
arr[2] = 3;
console.log(arr[3]); // D

//배열 내 원소 갯수 세기 arr.length
console.log(arr.length); // 4

//배열 내 원소 추가
arr.push('E');
console.log(arr); //[ 'A', 'B', 3, 'D', 'E' ]
