/*Form 방식을 사용하면 이 파일은 없어져도됨.*/

$(document).ready(function(){
  $("#printResult").on('click',function(){
    var saveBestColors=[]; //배열 선언

    $("input[name=bestColor]:checked").each(function(){
      saveBestColors.push($(this).val()); //value 들이 저장됨.
    });
    alert(saveBestColors); //팝업창뜸
  });
});
