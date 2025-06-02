// https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

*/


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	// map each letter to a word
	// split pattern and string into an array and iterate through them?
  // [a,b,b,a]
	// [dog, cat, cat, dog]
	const letters = pattern.split('');
	const words = s.split(' ');

	if (letters.length !== words.length) return false;

	const map = new Map();
	const exists = new Map();
	for (let i = 0; i < letters.length; i++) {
		console.log(!exists[words[i]])
		if (!map.has(letters[i]) && !exists.has(words[i])) {
			map.set(letters[i], words[i]);
			exists.set(words[i], 1);
			console.log('setting...', exists);
		} else if (map.get(letters[i]) !== words[i]){
			console.log(map.get(letters[i]), words[i]);
			return false;
		}


	}

	return true;
};

// console.log(wordPattern(pattern = "abba", s = "dog cat cat dog"));
// console.log(wordPattern(pattern = "abba", s = "dog cat cat fish"));
// console.log(wordPattern(pattern = "aaaa", s = "dog cat cat dog"));
console.log(wordPattern(pattern = "abba", s = "dog constructor constructor dog"))