let num1;
let num2;
let operationSymbol;
let currentDisplay = '';
let expectingSecondNumber = false;
let shouldClearDisplay = false;

const container = document.getElementById('container');

// call to create the calculator
createGrid();

function createGrid() {
  // create grid cells
  // Use objcets to define each button
  const buttons = [
    { label: '+', type: 'operation' },
    { label: '-', type: 'operation' },
    { label: '*', type: 'operation' },
    { label: '/', type: 'operation' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '0', type: 'number' },
    { label: 'C', type: 'clear' },
    { label: '.', type: 'dot' },
    { label: '=', type: 'equals' }
  ];

  // creates and displays each button
  for (let i = 0; i < buttons.length; i++) {
    const button = document.createElement('button');
    // Creates a specific ID for each number
    button.id = `btn-${buttons[i].label}`;
    button.classList.add('gridChild', buttons[i].type);
    button.textContent = buttons[i].label;

    button.dataset.value = buttons[i].label;

    // Here is the main logic for the buttons
    button.addEventListener('click', function () {
      // Get the button type
      const value = this.dataset.value;
      const type = this.classList[1];

      // number check if we're inputting first,second number or post-result phase
      if (type === 'number') {
        console.log(`Number ${value} clicked`);

        // Clear display if we're in a "post-result" state
        if (shouldClearDisplay) {
          clearDisplay('display');
          shouldClearDisplay = false;
        }

        // Handle second number input (clear on first digit)
        if (expectingSecondNumber) {
          clearDisplay('display');
          expectingSecondNumber = false;
        }

        displayNumber('display', value);

        // equal checks if we're ready for the second number for operation
      } else if (type === 'operation') {
        console.log(`Operation ${value} clicked`);
        // first save current operation to global
        // Convert string to number
        num1 = parseFloat(currentDisplay);
        operationSymbol = value;

        // Prepare for second number
        expectingSecondNumber = true;

        // Allow continued operations
        shouldClearDisplay = false;

        // Equal tells us we're ready to operate on our two numbers
      } else if (type === 'equals') {
        console.log(`Equals clicked`);
        // equal acts as flag and then calls the operate function
        // Convert string to number
        num2 = parseFloat(currentDisplay);
        const result = operate(num1, num2, operationSymbol);
        currentDisplay = result.toString();

        // display the answer to calculator
        document.getElementById('display').textContent = currentDisplay;

        // Reset num1 and operationSymbol for subsequent calculations
        num1 = '';
        operationSymbol = '';
        expectingSecondNumber = false;
        shouldClearDisplay = true;

        // reset every global var and display
      } else if (type === 'clear') {
        console.log(`Clear clicked`);
        clearEverything('display');
        expectingSecondNumber = false;
        shouldClearDisplay = false;

        // uses same logic as number buttons by checking if we already have a decimal in our current number
      } else if (type === 'dot') {
        // Handle decimal points
        if (shouldClearDisplay) {
          clearDisplay('display');
          shouldClearDisplay = false;
        }
        if (expectingSecondNumber) {
          clearDisplay('display');
          expectingSecondNumber = false;
        }
        if (!currentDisplay.includes('.')) {
          displayNumber('display', value);
        }
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

// Only clears the display
function clearDisplay(divId) {
  const element = document.getElementById(divId);
  element.textContent = ''
  currentDisplay = '';
}

// Clears display and all global functions
function clearEverything(divId) {
  const element = document.getElementById(divId);
  element.textContent = ''
  currentDisplay = '';
  num1 = '';
  num2 = '';
  operationSymbol = '';
}

// matches operation symbol with its actual operation
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

// The operation functions
function add(num1, num2) {
  console.log(num1 + num2);
  answer = num1 + num2
  if (answer % 1 != 0) {
    return answer.toFixed(6);
  }
  return answer;
}

function subtract(num1, num2) {
  console.log(num1 - num2);
  answer = num1 - num2
  if (answer % 1 != 0) {
    return answer.toFixed(6);
  }
  return answer;
}

function multiply(num1, num2) {
  console.log(num1 * num2);
  answer = num1 * num2
  if (answer % 1 != 0) {
    return answer.toFixed(6)
  }
  return answer;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero");
    return "Error";
  }
  console.log(num1 / num2);
  answer = num1 / num2
  if (answer % 1 != 0) {
    return answer.toFixed(6);
  }
  return answer;
}