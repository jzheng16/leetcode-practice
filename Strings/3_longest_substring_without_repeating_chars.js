/**
 * 
 * 3. Longest Substring Without Repeating Characters
Solved
Medium
Topics
premium lock iconCompanies
Hint

Given a string s, find the length of the longest

without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * 
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	// Sliding window, keep expanding until we reach a duplicate, once we do, we can record the length and then increment left until that duplicate character is found?
	if (s.length === 0) return 0;
	let currMax = -Infinity;
	let left = 0;
	let right = 0;
	let hash = {};

	while(right < s.length) {
			// Check if duplciate, if not store it in a hash map
			if (hash[s[right]]) {
			
					// decrease window until when? remove all characters until that one is no longer there
					while(hash[s[right]]) {
							hash[s[left]] = undefined;
							left++;
					}
			} 
			
			// Add current char into hash
			hash[s[right]] = 1;
			currMax = Math.max(currMax, right - left + 1);
			right++;
	}   
	return currMax;
};


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("tmmzuxt"));