/*var M = {
  v : 'v',
  f : function(){
    console.log(this.v);
  }
}*/

//모듈을 만들어 파일로 쪼개서 독립시킬 수 있음
//모듈을 가져오는 명령어 require
var part = require('./mpart.js');
part.f();
