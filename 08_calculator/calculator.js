const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
	return multiply([...Array(x + 1).keys()].slice(1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
