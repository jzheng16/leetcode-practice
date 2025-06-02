//https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150


/*

	Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	// Store characters in a hash map or map
	const letters = new Map();
	for (let i = 0; i < magazine.length; i++) {
		const currLetter = magazine[i];
		if (letters.has(currLetter)) {
			letters.set(currLetter, letters.get(currLetter) + 1);
		} else {
			letters.set(currLetter, 1);
		}
	}

	// Iterate through ransomNote
	for (let i = 0; i < ransomNote.length; i++) {
		const currLetter = ransomNote[i];
		if (!letters.has(currLetter)) {
			return false;
		} else if (letters.get(currLetter) === 0) {
			return false;
		} else {
			letters.set(currLetter, letters.get(currLetter) - 1);
		}

	}

	return true;


};