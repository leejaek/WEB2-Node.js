var M = {
  v : 'v',
  f : function(){
    console.log(this.v);
  }
}

//Module을 만드는 약속된 구문 //현재 파일 내에 M이 가리키는 객체를 바깥에서 사용할 수 있도록 함
module.exports = M;
