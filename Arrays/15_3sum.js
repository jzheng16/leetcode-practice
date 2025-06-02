// https://leetcode.com/problems/3sum/

/*

15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// Any benefit to sorting first?

	// Two sum allowed us to just store each value as a key and then find a key that added up to a sum

	// Three sum can be done in three loops of course

	// Sort the array, loop through it and have 2 pointers, j and k where j starts at i + 1 and k start at end of array, each iteration, check if i + j + k is = 0

	const solutions = [];
	const map = new Map();

	nums.sort((a,b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];
			if (sum === 0) {
				const key = (nums[i].toString() + nums[j].toString() + nums[k].toString());
				console.log(key);
				if (!map.has(key)) {
					map.set(key, 1);
					solutions.push([nums[i], nums[j], nums[k]]);
				}
				j++;
			} else if (sum > 0) {
				k--;
			} else {
				j++;
			}
		}

	}

	return solutions;



};

console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4]))
console.log(threeSum(nums = [0, 1, 1]))
console.log(threeSum(nums = [0, 0, 0]))




