const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
	return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	let total = 1;
	for (var i = 0; i < b; i++) {
		total = total * a;
	}
	return total;
};

const factorial = function(x) {
	let total = 1;
	for (var i = x; i > 0; i--) {
		total = total * i;
	}
	return total;
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
