var express = require('express');
var app = express();
var router=require('./router/main')(app);// 라우터 모듈인 main.js를 불러와서 app에 전달

app.set('views',__dirname+'/views'); //서버가 읽을 수 있도록 html의 위치를 정의
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//첫번째 파라미터 : 부를 때 사용하는 경로, 두번째 파라미터 : 실제 파일의 위치
app.use('/script',express.static(__dirname+"/public/script"));
app.use('/css',express.static(__dirname+"/public/css"));
app.use('/jquery',express.static(__dirname+"/public/jquery"));


//웹서버 생성
app.listen(8000,function(){
	console.log('Server on!');
});
