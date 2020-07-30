var http = require('http');
var fs = require('fs');
// web app은 url을 require함 - 'url' Module을 사용함 - 'url' Module은 var url 변수를 통해 사용
// 아래있던 url 변수값은 _url로 변경하여 겹치지 않도록
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    // queryData에는
    var queryData = url.parse(_url, true).query;
    //title 변수에 queryData.id를 넣어서 아래 template coded ㅇㅔㅅㅓ ㅎㅗㅏㄹㅇㅛㅇ
    var title = queryData.id;
    console.log(queryData.id);
    // '/' url에 대한 조건문을 걸어서 아래 template에서 <h1>WEB</h1> 실행 시 title = Welcome으로 변경되도록 함
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    // 템플릿 작성
    var template =
    `<!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>`
    //사용자가 접속한 페이지에 따라서 읽어
    response.end(template);

});
app.listen(3000);
