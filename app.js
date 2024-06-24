let a = "";
let b = "";
let result = 0;
let op = undefined;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (op === "add") return add(a, b);
  if (op === "subtract") return subtract(a, b);
  if (op === "multiply") return multiply(a, b);
  if (op === "divide") return divide(a, b);
};

function setOperator(operator) {
  if (op && b) {
    result = operate(a, b, op);
    displayValue.textContent = result;
    a = result;
    b = "";
    op = undefined;
  }
  op = operator;
  console.log(`${operator}`);
}

function resetOperation() {
  a = "";
  b = "";
  result = "";
  op = undefined;
  displayValue.textContent = "0";
}

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const numbers = document.querySelectorAll(".number");
const displayValue = document.getElementById("value");
const clearButton = document.getElementById("clear");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (op) {
      b += number.textContent;
      displayValue.textContent = b;
    } else {
      a += number.textContent;
      displayValue.textContent = a;
    }
    console.log(a, b);
  });
});

clearButton.addEventListener("click", () => {
  resetOperation();
  console.log(a, b, op);
});

addButton.addEventListener("click", () => setOperator("add"));
subtractButton.addEventListener("click", () => setOperator("subtract"));
multiplyButton.addEventListener("click", () => setOperator("multiply"));
divideButton.addEventListener("click", () => setOperator("divide"));

equalsButton.addEventListener("click", () => {
  if (op && b) {
    result = operate(a, b, op);
    displayValue.textContent = result;
    a = result;
    b = "";
    op = undefined;
  }
  console.log("equals");
  console.log(`${a} ${op} ${b} = ${result}`);
});
