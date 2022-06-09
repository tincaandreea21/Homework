function getInputValue() {
  var inputValue = document.querySelector("#input-name").value;
  var gender = "undefined";
  if (document.querySelector("#input-gm").checked === true) {
    gender = "M";
  } else if (document.querySelector("#input-gf").checked === true) {
    gender = "F";
  }
  var height = document.querySelector("#input-height").value;
  var weight = document.querySelector("#input-weight").value;
  var bmi = weight / height ** 2;
  var status = "";
  if (bmi >= 30) {
    status = "Obese";
    document.getElementById("result-status").style.color = "red";
  } else if (bmi >= 25) {
    status = "Overweight";
    document.getElementById("result-status").style.color = "orange";
  } else if (bmi >= 18.5) {
    status = "Normal";
    document.getElementById("result-status").style.color = "green";
  } else {
    status = "Underweight";
    document.getElementById("result-status").style.color = "blue";
  }

  document.getElementById(
    "result-text"
  ).innerHTML = `${inputValue} / ${gender} / BMI: ${bmi.toFixed(2)}`;

  document.getElementById("result-status").innerHTML = status;
}
