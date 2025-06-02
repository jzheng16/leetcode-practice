/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 * 
 * 
 * For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.

Example 1:

Input: sequence = "ababc", word = "ab"
Output: 2
Explanation: "abab" is a substring in "ababc".
Example 2:

Input: sequence = "ababc", word = "ba"
Output: 1
Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".
Example 3:

Input: sequence = "ababc", word = "ac"
Output: 0
Explanation: "ac" is not a substring in "ababc".
 */
var maxRepeating = function (sequence, word) {

	// sliding window?
	// start at first instance, if it matches extend the window to the next one, if it doesnt decrease from left side
	// let repeatCount = 0;
	// let highest = 0;
	// let startIndex = 0;
	// for (let i = 0; i < sequence.length; i++) {
	// 	console.log('what is i', i);
	// 	if (sequence.slice(i, word.length) === word) {
	// 		startIndex = i;
	// 		console.log('here')
	// 		repeatCount++;
	// 		i = i + word.length - 1;  
	// 		if (repeatCount >= highest) {
	// 			highest = repeatCount;
	// 		}
	// 	} else {
	// 		repeatCount = 0;
	// 		i = startIndex + 1;
	// 	}
	// }
	let repeatCount = 0;
	let highest = 0;
	let count = 0;
	let i = 0;
	while (i < sequence.length) {
		console.log('what is i', i, sequence.slice(i, i + word.length));
		if (sequence.slice(i, i + word.length) === word) {
			console.log('here');
			repeatCount++;
			i = i + word.length;
			if (repeatCount > highest) {
				highest = repeatCount;
			}

		} else {
			
			repeatCount = 0;
			count++;
			i = count;
		}
	}
	return highest;

};

console.log(maxRepeating("ababc", "ab"))
console.log(maxRepeating("ababc", "ba"))
console.log(maxRepeating("ababc", "ac"))
