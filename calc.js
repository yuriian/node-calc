const operations = require('./operations');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js

You've opened the calculator on NodeJS.
Version: 1.0.0

To use the calculator:
the user should input two numbers, and then choose what to do with them.
`);

const checkUserInput = (...rest) => {
  if (!operations.validateNumbers.apply(null, rest)) {
    console.log('Only numbers are allowed. Please run the program again.')
    rl.close();
    return;
  }
}

rl.question('Input the first number: ', (x) => {
  // checkUserInput(x);

  rl.question('Input the second number: ', (y) => {
    // checkUserInput(y);

    rl.question(`
    Choose one of the operations:
    
    [1] Addition (+)
    [2] Subtraction (-)
    [3] Multiplication (*)
    [4] Division (/)

    Your choice is: `, (choice) => {
      // checkUserInput(choice);

      let res = null;

      if (!operations.validateNumbers(x, y)) {
        console.log('Only numbers are allowed. Please run the program again.');
      } else {
        switch (choice) {
          case '1':
            res = operations.add(x, y);
            console.log(`The sum of ${x} and ${y} is ${res}.`);
            break;
          case '2':
            res = operations.subtract(x, y);
            console.log(`The difference between ${x} and ${y} is ${res}.`);
            break;
          case '3':
            res = operations.multiply(x, y);
            console.log(`The product of ${x} and ${y} is ${res}.`);
            break;
          case '4':
            res = operations.divide(x, y);
            console.log(`The division of ${x} by ${y} is ${res}.`);
            break;
          default:
            console.log('Please restart the program and enter numbers between 1 and 4.');
            break;
        }
      }
      rl.close();
    });
  });
});