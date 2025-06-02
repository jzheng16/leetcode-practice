/*

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	// Store these in a hash map with the key being the value and the value being the number of pairs.. then just loop through them, if there is 2 or more add up totals
	let goodPairs = 0;
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);
	}

	// Sum up good pairs
	map.forEach((count, value) => {
		if (count > 1) {
			for (let i = count - 1; i > 0; i--) {
				goodPairs += i;
			}
		}
	});

	return goodPairs;

};


// Alternative solution 
function numIdenticalPairs(A) {
	let ans = 0;
	const cnt = {};

	for (let x of A) {
		ans += cnt[x] || 0;
		cnt[x] = (cnt[x] || 0) + 1;
	}

	return ans;
}
