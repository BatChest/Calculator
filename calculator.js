let num1 = 0;
let num2 = 0;
let operationSymbol;
// stores the current display
let currentDisplay = '';

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
        displayNumber('display', value);

      } else if (type === 'operation') {
        console.log(`Operation ${value} clicked`);
        // first save current operation to global
        // Convert string to number
        num1 = parseFloat(currentDisplay);
        operationSymbol = value;
        // clear display to input second number
        clearDisplay('display');

      } else if (type === 'equals') {
        console.log(`Equals clicked`);
        // equal acts as flag and then calls the operate function
        // Convert string to number
        num2 = parseFloat(currentDisplay);
        const result = operate(num1, num2, operationSymbol);
        currentDisplay = result.toString();
        // display the answer to calculator
        document.getElementById('display').textContent = currentDisplay;

      } else if (type === 'clear') {
        console.log(`Clear clicked`);
        clearDisplay('display');
      }
    });
    container.appendChild(button);
  }
}

// Simply displays the number that are clicked
function displayNumber(divId, numberClicked) {
  const divElement = document.getElementById(divId);
  if (divElement) {
    divElement.textContent += numberClicked;
    // Update the global variable with the new content
    currentDisplay = divElement.textContent;
  } else {
    console.error("Div element with ID '" + divId + "' not found.");
  }
}

// Clear display to nothing
function clearDisplay(divId) {
  const element = document.getElementById(divId);
  element.textContent = ''
  currentDisplay = '';
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