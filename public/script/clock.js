//html파일에서 clock이라는 id로 시간 출력
var clockTarget=document.getElementById("clock");

function clock(){
  var date=new Date();
  var hour=addZeros(date.getHours(),2);
  var min=addZeros(date.getMinutes(),2);
  var sec=addZeros(date.getSeconds(),2);
  var amPm='AM'; //초기값 AM

  if(hour>=12){
    amPm='PM';
    hour=addZeros(hour-12,2);
  }

  clockTarget.innerHTML=hour+": "+min+": "+sec+" "+amPm;
}

///자릿수 맞추기
function addZeros(num, digit){
    var zero='';
    num=num.toString();
    if(num.length<digit){
      for(i=0;i<digit-num.length;i++){
        zero+='0';
      }
    }
    return zero+num;
}

function clock_init(){
  clock();
  setInterval(clock,1000);
}

clock_init();
