var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href ="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href ="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i = i + 1
  }
  list = list + '</ul>';
  return list
}

//createServer는 nodejs로 웹브라우저가 접속 들어올때마다 callback 함수로 nodejs 호출
//그 때 함수에 인자를 두개 주는데 request 는 웹브라우저가 요청할 때 보낸 정보들
//response는 응답할 때 서버에서 전송할 정보들
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname=== '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(err, filelist){
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200);
            response.end(template);
        });
      } else {
        fs.readdir('./data', function(err, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200);
            response.end(template);
            });
          });
        }
      } else if(pathname === '/create'){
        fs.readdir('./data', function(err, filelist){
            var title = 'WEB - create';
            var list = templateList(filelist);
            var template = templateHTML(title, list, `
              <form action="http://localhost:3000/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                  <textarea name="description" placeholder="description"></textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
              `);
            response.writeHead(200);
            response.end(template);
        });
    } else if(pathname === '/create_process'){
      var body = '';
      //request.on : 웹브라우저가 post 방식으로 데이터 전송 시에 데이터가 매우 크면 데이터를 한번에 처리하다가
      //프로그램에 꺼지거나 무리가 올 수 있음 그래서 nodejs에서는 post 방식으로 전송되는 데이터가 많은 경우를
      //대비해서 아래와 같은 사용방법을 제공하는데 data는 callback으로 처리하여 전체 데이터를 나누어 서버쪽에서 수신할 때마다
      //callback함수를 호출하도록 하고, function(data)를 이용해서 수신한 정보를 주도록 함
      request.on('data',function(data){
          body = body + data; //실행할 때마다 body에 data를 추가함
      });
      //정보가 들어오다가 더이상 들어올 정보가 없으면 end 뒤에 붙는 function()을 호출하도록 되어있음
      request.on('end',function(){
        //qureyString 중 parse 라는 함수에 그동안 저장한 body 값을 주면 post data에 들어가도록 함
        //parse 함수는 정보를 객체화 하는 역할
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description;
      });
      response.writeHead(200);
      response.end('success');
    }else {
      response.writeHead(404);
      response.end('Not Found');
    }
});
app.listen(3000);
