// https://leetcode.com/problems/group-anagrams/description/

/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
// 	// Go thorugh each str, sort them and compare?
// 	// Maybe remove strs if they match so they dont get put into other groups of anagrams?
// 	let final = [];
// 	while (strs.length) {
// 		const str = strs.splice(0, 1)[0];
// 		const anagrams = [str];
// 		console.log(str);
// 		const sorted = str.split('').sort().join('');
// 		for (let i = 0; i < strs.length; i++) {
// 			if (sorted === strs[i].split('').sort().join('')) {
// 				anagrams.push(strs[i]);
// 				strs.splice(i, 1);
// 				i--;
// 			}
// 		}
// 		final.push(anagrams);


// 	}
// 	return final;


// 	// Loop through each word, sort in a new array

// 	// Loop through each word and put into a 




    
// };
var groupAnagrams = function(strs) {
	// Loop through each word, sort in a new array

	// Push indexes of same str into a dict
	// Iterate through each key of the dict, create an array of anagrams, push into final anagram list
	let final = [];

	const sortedWords = [...strs].map(str => str.split('').sort().join(''));
	const groups = sortedWords.reduce((dict, str, i) => {
		if (!dict[str]) {
			dict[str] = [strs[i]];
		} else {
			dict[str].push(strs[i]);
		}
		return dict;
	}, {});

	// console.log(groups);


	Object.values(groups).forEach(group => {
		// let anagrams = [];
		// for (let i = 0; i < group.length; i++) {
		// 	anagrams.push(strs[group[i]]);
		// }
		final.push(group);
	})
	
	return final;

};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(['','','']));