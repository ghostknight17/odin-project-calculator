let operator = '';
let firstNumber = '';
let secondNumber = '';

const screen = document.querySelector('.screen');
const equalsButton = document.querySelector('#equals-button');
const numberButtons = document.querySelectorAll(
  '.buttons-container > .number-button'
);
const operatorButtons = document.querySelectorAll(
  '.buttons-container > .operator-button'
);

numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (operator !== '') secondNumber += event.target.innerText;
    screen.textContent += event.target.innerText;
  });
});
operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    firstNumber = screen.textContent;
    operator = event.target.innerText;
    screen.textContent += operator;
  });
});
equalsButton.addEventListener('click', () => {
  operate(operator, firstNumber, secondNumber);
});

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function exponentiate(a, b) {
  return a ** b;
}
function getRemainder(a, b) {
  return a % b;
}
function operate(operator, firstNumber, secondNumber) {
  let result;
  if (operator === '+') {
    result = add(Number(firstNumber), Number(secondNumber));
    screen.textContent = result;
  } else if (operator === '-') {
    result = subtract(Number(firstNumber), Number(secondNumber));
    screen.textContent = result;
  } else if (operator === '*') {
    result = multiply(Number(firstNumber), Number(secondNumber));
    screen.textContent = result;
  } else if (operator === '/') {
    result = divide(Number(firstNumber), Number(secondNumber));
    screen.textContent = result;
  } else if (operator === '**') {
    result = exponentiate(Number(firstNumber), Number(secondNumber));
    screen.textContent = result;
  } else {
    result = getRemainder(Number(firstNumber), Number(secondNumber));
    screen.textContent = result;
  }
}
