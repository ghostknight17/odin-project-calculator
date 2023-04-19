let operator = '';
let firstNumber = '';
let secondNumber = '';

const screen = document.querySelector('.screen');
const equalsButton = document.querySelector('#equals-button');
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const decimalButton = document.querySelector('#decimal-button');
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
    if (operator !== '') {
      operate(operator, firstNumber, secondNumber);
      secondNumber = '';
    }
    firstNumber = screen.textContent;
    operator = event.target.innerText;
    screen.textContent += operator;
  });
});
equalsButton.addEventListener('click', () => {
  if (secondNumber !== '') {
    operate(operator, firstNumber, secondNumber);
    firstNumber = screen.textContent;
    secondNumber = '';
    operator = '';
  }
});
clearButton.addEventListener('click', () => {
  cleanScreen();
});
deleteButton.addEventListener('click', () => {
  screen.textContent = screen.textContent.replace(/.$/, '');
  if (firstNumber !== '' && operator !== '') {
    secondNumber = secondNumber.replace(/.$/, '');
  }
});
decimalButton.addEventListener('click', () => {
  if (!screen.textContent.includes('.')) {
    screen.textContent += '.';
  }
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
    screen.textContent =
      Math.round((result + Number.EPSILON) * 100000) / 100000;
  } else if (operator === '-') {
    result = subtract(Number(firstNumber), Number(secondNumber));
    screen.textContent =
      Math.round((result + Number.EPSILON) * 100000) / 100000;
  } else if (operator === '*') {
    result = multiply(Number(firstNumber), Number(secondNumber));
    screen.textContent =
      Math.round((result + Number.EPSILON) * 100000) / 100000;
  } else if (operator === '/' && secondNumber !== '0') {
    result = divide(Number(firstNumber), Number(secondNumber));
    screen.textContent =
      Math.round((result + Number.EPSILON) * 100000) / 100000;
  } else if (operator === '/' && secondNumber === '0') {
    result = divide(Number(firstNumber), Number(secondNumber));
    screen.textContent = 'Error';
  } else if (operator === '**') {
    result = exponentiate(Number(firstNumber), Number(secondNumber));
    screen.textContent =
      Math.round((result + Number.EPSILON) * 100000) / 100000;
  } else {
    result = getRemainder(Number(firstNumber), Number(secondNumber));
    screen.textContent =
      Math.round((result + Number.EPSILON) * 100000) / 100000;
  }
}
function cleanScreen() {
  screen.textContent = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
}
