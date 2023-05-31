let displayValue = document.querySelector('.display').textContent;
let firstNumber = '';
let secondNumber = '';
let operator = '';

document.addEventListener('click', event => {
  const button = event.target.closest('.buttons__number');
  if (!button) return;

  const buttonValue = button.textContent;
  updateDisplay(displayValue == 0 ? buttonValue : displayValue + buttonValue);
});

const equalsButton = document.querySelector('.buttons__equal');
equalsButton.addEventListener('click', () => {
  result = operate(operator, firstNumber, displayValue);
  updateDisplay(result);
});

const clearButton = document.querySelector('.buttons__clear');
clearButton.addEventListener('click', clear);

const addButton = document.querySelector('.buttons__add');
addButton.addEventListener('click', () => {
  processOperation('+');
});

const subtractButton = document.querySelector('.buttons__subtract');
subtractButton.addEventListener('click', () => {
  processOperation('-');
});

const multiplyButton = document.querySelector('.buttons__multiply');
multiplyButton.addEventListener('click', () => {
  processOperation('*');
});

const divideButton = document.querySelector('.buttons__divide');
divideButton.addEventListener('click', () => {
  processOperation('/');
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
  return b != 0 ? a / b : 'Error';
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function clear() {
  displayValue = 0;
  firstNumber = '';
  secondNumber = '';
  document.querySelector('.display').textContent = displayValue;
}

function updateDisplay(value) {
  displayValue = value;
  document.querySelector('.display').textContent = displayValue;
}

function processOperation(sign) {
  if (firstNumber == '') {
    firstNumber = displayValue;
  } else {
    secondNumber = displayValue;
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = '';
  }
  operator = sign;
  updateDisplay(0);
}
