var member = ['eoing', 'k8805', 'hoya'];
console.log(member[1]); //k8805

var i = 0;

while(i < member.length){
  console.log('array loop', member[i]);
  i = i + 1;
}

var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'manager': 'hoya'
} //object literal 은 {} ' ' : ' '로 구성

console.log(roles.designer); //k8805
console.log(roles['designer']); //k8805

for(var a in roles){
  console.log('object =>', a, 'value =>', roles[a]);
}
