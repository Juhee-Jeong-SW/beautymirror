//html파일에서 date라는 id로 날짜 출력
var dateTarget=document.getElementById("date");

function calendar(){
  var date=new Date();
  var year=date.getFullYear();
  var month=date.getMonth();
  month=month+1;//month가 0부터 시작함.
  var clockDate=date.getDate();
  var day=date.getDay();
  var week=['SUN','MON','TUE','WED','THU','FRI','SAT'];

  dateTarget.innerHTML=year+'년 '+month+'월 '+clockDate+'일 '+week[day];
}

function calendar_init(){
  calendar();
  setInterval(calendar,1000);
}
calendar_init();
