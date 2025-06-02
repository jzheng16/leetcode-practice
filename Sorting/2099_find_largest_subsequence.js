/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 *
Code
Testcase
Testcase
Test Result
2099. Find Subsequence of Length K With the Largest Sum
Attempted
Easy
Topics
Companies
Hint
You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.

Return any such subsequence as an integer array of length k.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.



Example 1:

Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.
Example 2:

Input: nums = [-1,-2,3,4], k = 3
Output: [-1,3,4]
Explanation:
The subsequence has the largest sum of -1 + 3 + 4 = 6.
Example 3:

Input: nums = [3,4,3,3], k = 2
Output: [3,4]
Explanation:
The subsequence has the largest sum of 3 + 4 = 7.
Another possible subsequence is [4, 3].

 */
var maxSubsequence = function (nums, k) {
	let highest = null;
	let highestSub = [];
	for (let i = 0; i <= nums.length - k; i++) {
		console.log('i', i)
		let j  = 0 ;
		let sum = 0;
		let sub = [];
		while (j < k) {
			sum += nums[i + j];
			sub[j] = nums[i + j];
			j++;
		}
		if (!highest || sum > highest) {
			highest  = sum;
			highestSub = sub;
		}
	}
	
	return highestSub;
};

console.log(maxSubsequence([2,1,3,3], 2));