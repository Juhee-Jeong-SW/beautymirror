function weatherBallon( cityID ){
  var key='bc8bed7cf0e9ffc8f46964db66397c72';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
  .then(function(resp) {return resp.json() }) //convert data to json
  .then(function(data) {
    drawWeather(data); //call drawWeather
  })
  .catch(function() {
    //catch any errors
  });
}
function drawWeather(d){
  var celcius=Math.round(parseFloat(d.main.temp)-273.15);

  document.getElementById('description').innerHTML=d.weather[0].description;
  //url의 json을 해석한데에서 받아온 아이콘값을 이미지로 출력.
  icon.src="http://openweathermap.org/img/wn/" + d.weather[0].icon + ".png"; //아이콘 이미지 출력
  document.getElementById('temp').innerHTML=celcius+'&deg;';
  document.getElementById('location').innerHTML=d.name;
}

window.onload=function(){
  weatherBallon(1835847);//서울 특별시 id
}
