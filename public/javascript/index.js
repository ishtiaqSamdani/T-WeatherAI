var input = document.querySelector('.input_text');
var date = document.querySelector('.date');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var conditions = document.querySelector('.conditions');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+input.value+'/'+date.value+'?unitGroup=metric&key=XQKX6JU6JDXVAW3CVSDU5R7VQ&options=nonulls&include=obs%2Cfcst%2Cstats%2Calerts%2Ccurrent%2Chistfcst')
.then(response => response.json())
.then(data => {
  var nameValue = data['resolvedAddress'];
  var tempValue = data['days'][0]['temp'];
  var conditionsValue = data['days'][0]['conditions'];
  var descValue = data['days'][0]['description'];

  main.innerHTML = nameValue;
  temp.innerHTML = "Temperature - "+tempValue;
  conditions.innerHTML = conditionsValue;
  desc.innerHTML = descValue;
  input.value ="";
  date.value ="";
})

.catch(err => alert("Please enter a correct city!"));
})