/**
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	// Grab the total product
	// Then divide by nums[i]
	// But algorithm says cannot use division operation
	// Prefix ? multiply all products before it and store it in that particular index? 
	// Suffix multiply all products after it and store it in that particular index
	// exclude the index itself
	const prefixSums = [1]; // set the first value at 1 why
	for (let i = 1; i < nums.length; i++) {
			prefixSums[i] = prefixSums[i - 1] * nums[i - 1]; // why i - 1? because we dont want to include it
	}

	const suffixSums = [];
	suffixSums[nums.length - 1] = 1;
	for (let i = nums.length - 2; i >= 0; i--) {
			suffixSums[i] = suffixSums[i + 1] * nums[i + 1];
	}
	
	console.log(prefixSums, suffixSums)

	// [1, 2, 6, 24]
	let out = [];
	for (let i = 0; i < nums.length; i++) {
		out[i] = prefixSums[i] * suffixSums[i];
	}

	return out;
};

console.log(productExceptSelf([1, 2, 3, 4]));