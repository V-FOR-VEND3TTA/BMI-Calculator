/* How to calculate your BMI:
BMI = Weight in kilograms / Height in metres ** 2 (squared) */

function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmi = weight / height ** 2;
  document.getElementById("result").innerHTML = bmi.toFixed(2);
  // Get the docunent to write that the BMI is ...
}
