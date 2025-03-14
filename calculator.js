let num1;
let num2;
let operationSymbol;

const container = document.getElementById('container');

//Create 3x3 grid for calculator
createGrid();

function createGrid() {
  // create grid cells
  const numberLabels = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

  for (let i = 0; i < numberLabels.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridChild');
    newDiv.textContent = numberLabels[i];
    container.appendChild(newDiv);
  }

  const operationLabels = ['+', '-', '*', '/'];

  for (let i = 0; i < operationLabels.length; i++) {
    const operationButtons = document.createElement('div');
    operationButtons.classList.add('gridChild', 'operation');
    operationButtons.textContent = operationLabels[i];
    container.appendChild(operationButtons);
  }

  const equalsButton = document.createElement('div');
  equalsButton.classList.add('gridChild', 'equals');
  equalsButton.textContent = '=';
  container.appendChild(equalsButton);

  const specialOperators = ['0', 'c'];
  for (let i = 0; i < specialOperators.length; i++) {
    const specialButtons = document.createElement('div');
    specialButtons.classList.add('gridChild', 'special');
    specialButtons.textContent = specialOperators[i];
    container.appendChild(specialButtons);
  }
}

function operate(num1, num2, operationSymbol) {
  switch (operationSymbol) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}


function add(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

function subtract(num1, num2) {
  console.log(num1 - num2);
  return num1 - num2;
}

function multiply(num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero");
    return "Error: Cannot divide by zero";
  }
  console.log(num1 / num2);
  return num1 / num2;
}