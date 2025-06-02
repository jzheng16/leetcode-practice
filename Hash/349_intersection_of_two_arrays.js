/*

349. Intersection of Two Arrays
Easy
Topics
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	// Store one array inside a hash and then see loop through 2nd array and see if it exists in the hash
	const map = new Map();
	const result = [];

	for (let i = 0; i < nums1.length; i++) {
		map.set(nums1[i], 1);
	}

	for (let i = 0; i < nums2.length; i++) {
		if (map.has(nums2[i])) {
			result.push(nums2[i]);
			map.delete(nums2[i]);
		}
	}

	return result;


};