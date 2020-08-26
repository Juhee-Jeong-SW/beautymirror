module.exports=function(app){
  //메인페이지
  app.get('/',function(req,res){
    res.render('index.html')
  });

  //색깔 출력 페이지 test
  app.get('/printcolors',function(req,res){
    res.render('printcolors.html');
  });

  app.get('/prac',function(req,res){
    res.render('prac.html');
  });
 

app.get('/summermute',function(req,res){

    res.render('summermute.html');

  });

 

  app.get('/springlight',function(req,res){

    res.render('springlight.html');

  });

 

  app.get('/springbright',function(req,res){

    res.render('springbright.html');

  });

 

  app.get('/fallmute',function(req,res){

    res.render('fallmute.html');

  });

 

  app.get('/summerlight',function(req,res){

    res.render('summerlight.html');

  });

 

  app.get('/falldeep',function(req,res){

    res.render('falldeep.html');

  });

 

  app.get('/winterdeep',function(req,res){

    res.render('winterdeep.html');

  });

 

  app.get('/winterclear',function(req,res){

    res.render('winterclear.html');

  });
app.get('/printcolor_bright',function(req,res){
    res.render('printcolor_bright.html');
  })
  app.get('/printcolor_dark',function(req,res){
    res.render('printcolor_dark.html');
  })
  app.get('/printcolor_darkGrayish',function(req,res){
    res.render('printcolor_darkGrayish.html');
  })
  app.get('/printcolor_deep',function(req,res){
    res.render('printcolor_deep.html');
  })
  app.get('/printcolor_dull',function(req,res){
    res.render('printcolor_dull.html');
  })
  app.get('/printcolor_grayish',function(req,res){
    res.render('printcolor_grayish.html');
  })
  app.get('/printcolor_light',function(req,res){
    res.render('printcolor_light.html');
  })
  app.get('/printcolor_lightGrayish',function(req,res){
    res.render('printcolor_lightGrayish.html');
  })
  app.get('/printcolor_pale',function(req,res){
    res.render('printcolor_pale.html');
  })
  app.get('/printcolor_soft',function(req,res){
    res.render('printcolor_soft.html');
  })
  app.get('/printcolor_strong',function(req,res){
    res.render('printcolor_strong.html');
  })
  app.get('/printcolor_vivid',function(req,res){
    res.render('printcolor_vivid.html');
  })
//이렇게 하면 다음페이지에서 배열로 표시됨
//ex) ["choice5","choice7","choice8"]

/*  app.get('/new',function(req,res){
    //res.send(req.query.bestColor);
    //여기서 res.router로 새로운페이지(3개의 천슬라이드를 가진 페이지를 import해주면 그 페이지로 넘어갈 듯하다.)

    //var 가 없으면 전역변수?

    selected_array=[];
    selected_array=req.query.bestColor;

    //아ㅏㅏㅏㅏ..하....
    //템플릿을 써볼까..써서 넣어버리는방식으로 해야되나..

    console.log(selected_array[0]);
    console.log(selected_array[1]);
    console.log(selected_array[2]);
    res.render('new.html');//됏당..
    console.log('new page');

  })*/


}
