function fchk(){
  var chk_obj=document.getElementByName("bestColor");
  var chk_length=chk_obj.length;
  console.log(chk_obj);
  var checked=0;
  var new_selected_array=[];
  for(i=0;i<chk_length;i++){
    if(chk_obj[i].checked==true){
      new_selected_array[checked]=chk_obj[i];
      cheked=checkd+1;
    }
    else {
      continue;
    }

    document.getElementById('selected_color1').innerHTML=new_selected_array[0]+"hi";
    document.getElementById('selected_color2').innerHTML=new_selected_array[1]+"hello";
    document.getElementById('selected_color3').innerHTML=new_selected_array[2]+"bye";
  }
  //체크된 색깔들은 new_selected_array에 들어있음.
}
