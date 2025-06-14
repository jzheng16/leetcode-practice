/**
 * https://leetcode.com/problems/edit-distance/description/?envType=problem-list-v2&envId=string
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character

 

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

 */

const minDistance = (word1, word2) => {
	let min = Infinity;
	if (word1 === word2) return 0;

	if (word1.length && !word2.length) return word1.length;
	if (!word1.length && word2.length) return word2.length;

	// First, determine if any letters are in the same position / match?

}