const repeatString = function(text, num) {
	let output = "";
	if (num < 0){
		output = "ERROR";
	}
	else {
		for (var i = 0; i < num; i++) {
			output += text;
		}
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
