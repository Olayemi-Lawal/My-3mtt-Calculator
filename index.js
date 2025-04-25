const inputValue = (value) => {
  let displayValue = document.getElementById("display");
  displayValue.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = " ";
}

function calculateValue() {
  let displayValue = document.getElementById("display")
  if(displayValue.value.trim() === " ") {
    displayValue.value = "0";
  }else {
    displayValue.value = eval(displayValue.value);
  }
}