const assert = require('assert');
const operations = require('./operations');

it('find the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4);
});

it('find the sum of -1 and -1', () => {
  assert.equal(operations.add(-1, -1), -2);
});

it('find the difference between 33 and 3', () => {
  assert.equal(operations.subtract(33, 3), 30);
});

it('find the product of 12 and 12', () => {
  assert.equal(operations.multiply(12, 12), 144);
});

it('find the division of 10 by 2', () => {
  assert.equal(operations.divide(10, 2), 5);
});

// error processing
it('check if the string is used instead of the number', () => {
  assert.equal(operations.validateNumbers('sammy', 5), false);
});

if ('check if two strings are used instead of numbers', () => {
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
  });

it('check if two numbers are used', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
});