// https://leetcode.com/problems/range-sum-query-immutable/description/
/*
	Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
	let sum = 0;
	for (let i = left; i <= right; i++) {
		sum += this.nums[i];
	}
    return sum;
};

const nums = [-2, 0, 3, -5, 2, -1];

var obj = new NumArray(nums)
console.log(obj.sumRange(0,2))
console.log(obj.sumRange(2,5))
console.log(obj.sumRange(0,5))

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */