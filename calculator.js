let num1;
let num2;
let operationSymbol;

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