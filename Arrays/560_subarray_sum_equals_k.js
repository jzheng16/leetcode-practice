/**
 * 560. Subarray Sum Equals K
Medium
Topics
premium lock iconCompanies
Hint

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

 
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	// lets try prefix sum

	// To find a subarray sum that equals to k at i position, you have to subtract the elements not in the subarray
	// from the sum of all the elements up until the current element?

	// The total number of subarrays is the number of prefix sums before the ith element where prefixSum[i] - prefixSum[0.... i -1]
	// Store prefix sums into a hash map for easy calculation

	// Initalize hash to keep track of running prefix sums and their frequencies, start with one key 0:1 to account for edge cases such as when 
	// currnet prefix sum  is equal to k

	const hash = {0:1}
	let curr_prefix_sum = 0;
	let subsequences = 0;
	// iterate through the nums array, calculate prefix, check if prefix - k is a key in our hash - why? that is because we know at nums[i],
	// the total number of subsequnces is the prefix at nums[i] - any prefixes before it should equal k 
	
	for (let i = 0; i < nums.length; i++) {
		curr_prefix_sum += nums[i];
		if (hash[curr_prefix_sum - k]) {
			subsequences += hash[curr_prefix_sum - k];
		}
		// Store the prefix into the hash for faster calculation
		hash[curr_prefix_sum] = hash[curr_prefix_sum] ? hash[curr_prefix_sum] + 1 : 1;
			
	}
	console.log(hash, subsequences);
	return subsequences;
 
	
};

subarraySum([1, 1, 1], 2);