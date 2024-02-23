const number = document.querySelectorAll('.number');
let displayValue = document.getElementById('value');
let value = 0;
const clear = document.getElementById('clear');
const clearDisplay = function () {
  if (value === 0) return;
    value = 0;
    displayValue.textContent = 0;
    console.log(value);
}

number.forEach((number) => {
  number.addEventListener('click', () => {
    if (value === 0) displayValue.textContent = '';
    value = displayValue.textContent += number.textContent;
    console.log(parseInt(value))
  })
});

clear.addEventListener('click', () => {
  value = 0;
  displayValue.innerHTML = 0;
  console.log(value);
});