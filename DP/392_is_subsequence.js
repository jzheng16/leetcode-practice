/*

  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // Loop through t, if it matches s, chop off one character from s but always chop off one from t
  // If at the end s' length is 0 return true, if not return false?

  // base cases?
  if (s.length > t.length) return false;
  if (s.length === t.length) return s === t;

  // Input: s = "abc", t = "ahbgdc" s = 'bc' t = 'hbgdc'
  while (t.length) {
  
    if (s[0] === t[0]) {
      s.splice(0, 1);
    }
    t.splice(0, 1);
  }
  return s.length === 0;




};