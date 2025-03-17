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
    const button = document.createElement('button');
    // button.id = 'numButton';
    // Creates a specific ID for each number
    button.id = `numButton-${numberLabels[i]}`;
    button.classList.add('gridChild');
    button.textContent = numberLabels[i];

    button.dataset.value = numberLabels[i];


    button.addEventListener('click', function () {
      const value = this.dataset.value;
      console.log(`Number ${value} clicked`);
      // Calculator logic
    });

    container.appendChild(button);
  }

  const operationLabels = ['+', '-', '*', '/'];

  for (let i = 0; i < operationLabels.length; i++) {
    const button = document.createElement('button');
    button.id = 'operationButton';
    button.classList.add('gridChild', 'operation');
    button.textContent = operationLabels[i];

    button.addEventListener('click', function () {
      alert('Operation Clicked!');
    });

    container.appendChild(button);
  }

  // Creates the equals button dynamically
  const button = document.createElement('button');
  button.id = 'equalButton';
  button.classList.add('gridChild', 'equals');
  button.textContent = '=';

  button.addEventListener('click', function () {
    alert('Equal Clicked!');
  });

  container.appendChild(button);

  const zeroButton = document.createElement('button');
  zeroButton.id = 'zeroButton';
  zeroButton.classList.add('gridChild', 'equals');
  zeroButton.textContent = '0';

  zeroButton.addEventListener('click', function () {
    alert('Zero Clicked!');
  });

  container.appendChild(zeroButton);

  // Creates the equals button dynamically
  const buttonClear = document.createElement('button');
  buttonClear.id = 'clearButton';
  buttonClear.classList.add('gridChild', 'equals');
  buttonClear.textContent = 'c';

  buttonClear.addEventListener('click', function () {
    alert('Clear Clicked!');
  });

  container.appendChild(buttonClear);
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