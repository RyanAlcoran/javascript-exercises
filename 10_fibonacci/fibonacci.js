const fibonacci = function(num) {
	if (num < 0){
		return "OOPS";
	}
	let prev = 0;
	let curr = 1;
		for (var i = 1; i < num; i++) {
		let temp = curr;
		curr = prev + curr;
		prev = temp;
	}
	return curr;
};

// Do not edit below this line
module.exports = fibonacci;
