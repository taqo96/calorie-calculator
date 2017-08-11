

var calculatebutton = document.getElementById ('calculate-button');

function doMaleCal(age, height, weight, field) {  

  var bmr = (parseInt(height) * 12.7) + (parseInt(weight) * 6.23) - (parseInt(age) * 6.8) + 66;

  console.log(bmr);
  //var c = a + b + c + d;
  field.innerHTML = bmr;
}

function doFemaleCal(age, height, weight, field) {  

  var bmr = (parseInt(height) * 4.7) + (parseInt(weight) * 4.35) + (parseInt(age) * 4.7) + 655;

  console.log(bmr);
  //var c = a + b + c + d;
  field.innerHTML = bmr;
}

calculatebutton.addEventListener('click', function(){

var age = document.getElementById ('age').value;
var height = document.getElementById ('height').value;
var weight = document.getElementById ('weight').value;
var sex = document.getElementById ('sex').value;
var total = document.getElementById('calcResult');


if(sex === "Female") {
	doFemaleCal(age, height, weight, total);
} else {
	doMaleCal(age, height, weight, total);
}
  
});

