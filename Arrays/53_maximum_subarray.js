/**
 * 
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * Given an integer array nums, find the

with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

 */

const maxSubArray = function(nums) {
	// Iterate through nums, adding each value to the currSUm and replacing currMax if it is greater. If the currSum goes negative, we can 
	// "start fresh" by dropping that entire subarray (every element in the indexes before the curr)
	let currSum = 0;
	let currMax = -Infinity;
	for(let i = 0; i < nums.length; i++) {
		
		currSum += nums[i];
		
		currMax = Math.max(currSum, currMax);

		// if the curr element reduces currSum to < 0, that essentially means that we can discard all elements to the left
		if (currSum < 0) {
			currSum = 0;
		}
	}
	return currMax;
}