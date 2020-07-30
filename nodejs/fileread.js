// fs 변수를 통해 node.js 의 Module인 filesystem을 다룸
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
});
