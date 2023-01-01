const sumAll = function(start, end) {
	let sum = 0;
	if (start < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
		return "ERROR";
	}
	else{
		if (start < end) {
			for (var i = start; i <= end; i++) {
			sum += i;
			}	
		}
		else {
			for (var i = start; i >= end; i--) {
				sum += i;
			}
		}
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
