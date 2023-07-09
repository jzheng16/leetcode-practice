/*
  https://leetcode.com/problems/isomorphic-strings/

  Given two strings s and t, determine if they are isomorphic.

  Two strings s and t are isomorphic if the characters in s can be replaced to get t.

  All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.  

  Input: s = "egg", t = "add"
  Output: true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // Create two maps to keep track of what from s gets mapped to t and vice versa, if the letter encountered is already mapped in s, make sure the corresponding index in t matches what is mapped
  if (s.length !== t.length) return false;
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] == undefined && map2[t[i]] == undefined) {
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
    } else if (map1[s[i]] == t[i]) {
      continue;
    } else {
      return false;
    }
    
  }


  return true;

};