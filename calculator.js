let num1;
let num2;
let operationSymbol;

const container = document.getElementById('container');

//Create 3x3 grid for calculator
createGrid();

function createGrid() {
  // create grid cells
  // Use objcets tp define each button
  const buttons = [
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operation' },
    { label: '-', type: 'operation' },
    { label: '*', type: 'operation' },
    { label: '/', type: 'operation' },
    { label: '=', type: 'equals' },
    { label: '0', type: 'number' },
    { label: 'C', type: 'clear' }
  ];

  for (let i = 0; i < buttons.length; i++) {
    const button = document.createElement('button');
    // Creates a specific ID for each number
    button.id = `btn-${buttons[i].label}`;
    button.classList.add('gridChild', buttons[i].type);
    button.textContent = buttons[i].label;

    button.dataset.value = buttons[i].label;


    button.addEventListener('click', function () {
      const value = this.dataset.value;
      // Get the button type
      const type = this.classList[1];

      // Different behavior based on button type
      if (type === 'number') {
        console.log(`Number ${value} clicked`);
        // Add number logic
      } else if (type === 'operation') {
        console.log(`Operation ${value} clicked`);
        // Add operation logic
      } else if (type === 'equals') {
        console.log(`Equals clicked`);
        // add equals logic
      } else if (type === 'clear') {
        console.log(`Clear clicked`);
        // add clear logic
      }
    });
    container.appendChild(button);
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