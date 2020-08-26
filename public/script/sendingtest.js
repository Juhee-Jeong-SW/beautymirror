var paleTone = new Array("#e9b8b8","#e9baaa","#efccaa","#efe0b5","#d8d5a8","#a5ceb6","#9ecdc9","#a5cad7","#a8b7cd","#b7b3cc","#c4afc4","#debbc6");
var lightTone=new Array("#f28c8e","#ff9e7d","#fcb869","#edd267","#caca61","#83c89c","#3faba4","#52a6bf","#6591c0","#8e87be","#ac7eae","#d98295");
var brightTone=new Array("#f15d69","#f7774d","#fba52f","#f2d324","#b7bf19","#00b275","#00a39b","#008fb3","#1979ba","#716bb6","#9c5da0","#cc5c87");
var lightGrayishTone=new Array("#bda2a2","#bda39a","#c7b3a0","#c0b69b","#bab89b","#95afa0","#90aeab","#95acb5","#929caa","#9c99a9","#a497a4","#b9a3aa");
var softTone=new Array("#c8787a","#d5896f","#d59f62","#ccb664","#aead5f","#66a986","#499b95","#498a9e","#58779a","#756f99","#8b698d","#ae6f85");
var strongTone=new Array("#c13547","#c7512c","#db8b08","#d2b700","#9aa400","#008a52","#007b75","#006a8b","#005692","#4b488e","#753a7a","#a03663");
var vividTone=new Array("#cd1f42","#e55125","#f29500","#e2c500","#a4b300","#009a55","#007e77","#006b93","#00569c","#474798","#793580","#ab2664");
var grayshTone=new Array("#6f5858","#6f5951","#776656","#716951","#6c6a51","#576e61","#536e6c","#4c6068","#4a525e","#52505e","#5a4e5a","#6c585e");
var dullTone=new Array("#9d5456","#a9634c","#a9783f","#a18e40","#85863c","#418261","#1c7570","#1f6578","#345474","#514d72","#664768","#854c60");
var deepTone=new Array("#9f1b34","#a53b1b","#aa6600","#a48f00","#717d00","#006f3e","#00625c","#00526f","#004075","#343472","#5a265f","#811f4c");
var darkGrayishTone=new Array("#3d2f2f","#3d2f2b","#463b30","#423c2d","#3e3d2d","#27362e","#253634","#273439","#242931","#292830","#2e272e","#3c2f33");
var darkTone=new Array("#642a2e","#6f3826","#704b1a","#6b5e1b","#535617","#185138","#004542","#004252","#14344e","#312e4d","#422944","#5d2d3f");

var arrColors=new Array();

/*var res=null;
var fs =require('fs');
var array=fs.readFileSync("new.txt").toString().split("\n");
for(i in array){
	res=concat(array[i]);}
//document.getElementById('tone').write(array);
//
//
//
/*
switch(res){
  case('Pale'): /*파이썬 코드 바꾸기 (파일 입력하는 부분 Tone지우기)*/
   /*  for(var i=0;i<paleTone.length;i++){
         arrColors[i]=paleTone[i];} break;
	case('Light'):
                for(var i=0;i<lightTone.length;i++){
			arrColors[i]=lightTone[i];} break;
                        case('Bright'):
                               for(var i=0;i<brightTone.length;i++){
                                       arrColors[i]=brightTone[i];} break;
		                                         case('LightGrayish'):
                                                for(var i=0;i<lightGrayishTone.length;i++){
                                                            arrColors[i]=lightGrayishTone[i];} break;
                                                              case('Soft'):
                                                                        for(var i=0;i<softTone.length;i++){
                                                                                    arrColors[i]=softTone[i];} break;
                                                                                      case('Strong'):
			                                                                                                for(var i=0;i<strongTone.length;i++){
                                                                                                              arrColors[i]=strongTone[i];} break;
                                                                                                                case('Vivid'):
                                                                                                                          for(var i=0;i<vividTone.length;i++){                                                                                                                                        arrColors[i]=vividTone[i];} break;
                                                                                                                                          case('Grayish'):
                                                                                                                                                    for(var i=0;i<grayishTone.length;i++)
		{                                                                                                                                                                 arrColors[i]=grayishTone[i];} break;
                                                                                                                                                                    case('Dull'):
                                                                                                                                                                              for(var i=0;i<dullTone.length;i++){
                                                                                                                                                                                            arrColors[i]=dullTone[i];} break;
                                                                                                                                                                                              case('Deep'):
                                                                                                                                                                                                        for(var i=0;i<deepTone.length;i++){
                                                                                                                                                                                                                      arrColors[i]=deepTone[i];} break;
                                                                                                                                                                                                                        case('DarkGrayish'):
                                                                                                                                                                                                                                  for(var i=0;i<darkGrayishTone.length;i++){
                                                                                                                                                                                                                                                arrColors[i]=darkGrayishTone[i];} break;
                                                                                                                                                                                                                                                  case('Dark'):
                                                                                                                                                                                                                                                            for(var i=0;i<darkTone.length;i++){
                                                                                                                                                                                                                                                                          arrColors[i]=darkTone[i];} break;
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                      :
*/
/*
파일스트림으로 txt파일 내용(openCV결과) 읽어와야 함.
다른 js파일에서 받아오는 과정 처리한다면, 이 js파일에 link처리 해주고 아래 조건문에서 변수(결과)사용
*/

/*
if(받아온 결과가 페일이면)
  반복문
    for(var i=0;i<paleTone.length;i++){
    arrColors[i]=paleTone[i];
  }
else if ~이면
  반복문
.
.
.
 12개 작성
*/
for(var i=0;i<paleTone.length;i++){
  arrColors[i]=paleTone[i]; //받아옴
}

  const nowColor1=document.getElementById('color1');//영역에 접근완료
  nowColor1.style.backgroundColor=arrColors[0];
  nowColor1.style.textAlign='center';
  nowColor1.style.color='white';
  nowColor1.style.fontSize='50px';
  nowColor1.style.fontWeight='bold';

  const nowColor2=document.getElementById('color2');
  nowColor2.style.backgroundColor=arrColors[1];
  nowColor2.style.textAlign='center';
  nowColor2.style.color='white';
  nowColor2.style.fontSize='50px';
  nowColor2.style.fontWeight='bold';

  const nowColor3=document.getElementById('color3');
  nowColor3.style.backgroundColor=arrColors[2];
  nowColor3.style.textAlign='center';
  nowColor3.style.color='white';
  nowColor3.style.fontSize='50px';
  nowColor3.style.fontWeight='bold';

  const nowColor4=document.getElementById('color4');
  nowColor4.style.backgroundColor=arrColors[3];
  nowColor4.style.textAlign='center';
  nowColor4.style.color='white';
  nowColor4.style.fontSize='50px';
  nowColor4.style.fontWeight='bold';

  const nowColor5=document.getElementById('color5');
  nowColor5.style.backgroundColor=arrColors[4];
  nowColor5.style.textAlign='center';
  nowColor5.style.color='white';
  nowColor5.style.fontSize='50px';
  nowColor5.style.fontWeight='bold';

  const nowColor6=document.getElementById('color6');
  nowColor6.style.backgroundColor=arrColors[5];
  nowColor6.style.textAlign='center';
  nowColor6.style.color='white';
  nowColor6.style.fontSize='50px';
  nowColor6.style.fontWeight='bold';

  const nowColor7=document.getElementById('color7');
  nowColor7.style.backgroundColor=arrColors[6];
  nowColor7.style.textAlign='center';
  nowColor7.style.color='white';
  nowColor7.style.fontSize='50px';
  nowColor7.style.fontWeight='bold';

  const nowColor8=document.getElementById('color8');
  nowColor8.style.backgroundColor=arrColors[7];
  nowColor8.style.textAlign='center';
  nowColor8.style.color='white';
  nowColor8.style.fontSize='50px';
  nowColor8.style.fontWeight='bold';

  const nowColor9=document.getElementById('color9');
  nowColor9.style.backgroundColor=arrColors[8];
  nowColor9.style.textAlign='center';
  nowColor9.style.color='white';
  nowColor9.style.fontSize='50px';
  nowColor9.style.fontWeight='bold';

  const nowColor10=document.getElementById('color10');
  nowColor10.style.backgroundColor=arrColors[9];
  nowColor10.style.textAlign='center';
  nowColor10.style.color='white';
  nowColor10.style.fontSize='50px';
  nowColor10.style.fontWeight='bold';

  const nowColor11=document.getElementById('color11');
  nowColor11.style.backgroundColor=arrColors[10];
  nowColor11.style.textAlign='center';
  nowColor11.style.color='white';
  nowColor11.style.fontSize='50px';
  nowColor11.style.fontWeight='bold';

  const nowColor12=document.getElementById('color12');
  nowColor12.style.backgroundColor=arrColors[11];
  nowColor12.style.textAlign='center';
  nowColor12.style.color='white';
  nowColor12.style.fontSize='50px';
  nowColor12.style.fontWeight='bold';
