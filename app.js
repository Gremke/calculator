const display = document.getElementById('display');
const number = document.querySelectorAll('.number');
const displayValue = document.getElementById('value');
number.forEach((number) => {
  number.addEventListener('click', () => {
    console.log(number.innerHTML);
    value.textContent += number.textContent;
  })
});