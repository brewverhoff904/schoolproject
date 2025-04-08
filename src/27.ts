// Example: Implementing a simple calculator with basic operations
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y !== 0) {
    return x / y;
  }
  throw new Error("Cannot divide by zero");
}

// Example usage:
console.log(add(2, 3)); // Output: 5
console.log(subtract(10, 4)); // Output: 6

function calculator() {
  console.log(`Running calculator function...`);
  const userInput = prompt("Enter two numbers to perform operations with:");
  try {
    const result = eval(userInput);
    console.log(`${userInput} is ${result}`);
  } catch (error) {
    console.error(error.message);
  }
}

calculator();
