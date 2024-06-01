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

const evaluate = function (a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (op === "add") return add(a, b);
};

function setOperator(operator) {
  if (op && b) {
    result = evaluate(a, b, op);
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
  result = 0;
  op = undefined;
  displayValue.textContent = "0";
}

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const numbers = document.querySelectorAll(".number");
let displayValue = document.getElementById("value");
const clearButton = document.getElementById("clear");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (op) {
      b += number.textContent;
    } else {
      a += number.textContent;
    }
    console.log(a, b);
  });
});

clearButton.addEventListener("click", () => {
  resetOperation();
  console.log(a, b, op);
});

addButton.addEventListener("click", () => setOperator("add"));

equalsButton.addEventListener("click", () => {
  if (op && b) {
    result = evaluate(a, b, op);
    displayValue.textContent = result;
    a = result;
    b = "";
    op = undefined;
  }
  //result = evaluate(a, b, op);
  console.log("equals");
  console.log(`${a} ${op} ${b} = ${result}`);
});
