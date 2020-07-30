//data folder 내 아이템을 추가할 경우 main.js 에서 수동적으로 목록을 업데이트해야함
//folder 내 파일 목록 자동으로 끌어오는 법

var testFolder = './data';
//var testFolder = './data'; ./: 현재 디렉토리에서 수행
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
}); // [ 'CSS', 'HTML', 'JavaScript' ] 해당 폴더 내의 파일들을 배열 형식으로 출력
