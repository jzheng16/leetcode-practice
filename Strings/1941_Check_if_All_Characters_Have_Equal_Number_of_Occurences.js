/**
 * Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
 */


// I can split sort and join to make it sorted string. 

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {

	const obj = {};
	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]] === undefined) {
			obj[s[i]] = 1;
		} else {
			obj[s[i]]++;
		}
	}

	const val = Object.values(obj)[0]
	console.log(val)
	return Object.values(obj).every(val1 => {
		console.log('val1', val1);

		return val === val1
	});


};

const x = areOccurrencesEqual("ss");
console.log(x);