const palindromes = function (string) {
	let clean = '';
	for (var i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() != string[i].toUpperCase()){
			clean += string[i];
		}
	}
	if(clean.toLowerCase().split('').reverse().join('') === clean.toLowerCase()){
		return true;
	}
	else{
		return false
	}
};

// Do not edit below this line
module.exports = palindromes;
