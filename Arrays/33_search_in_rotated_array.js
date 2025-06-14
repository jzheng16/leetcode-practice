/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Get pivot first, then do binary search based on whichever half of the pivot is relevant
  // To get pivot.. compare mid with the end? if mid > end then we know that the pivot is on the right half, else it is on the left half,
  // pivot is

  // DO regular binary search first
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  const pivotIndex = getPivot(nums);

	// Once we have pivot index, determine which half to look at
	if (target === nums[pivotIndex]) return pivotIndex;

	// if (pivotIndex === 0) return binarySearch(nums, target, );

	if (target > nums[pivotIndex] && target <= nums[nums.length - 1]) {
		// look at right half only if target > the number at pivot index and it is smaller than the last value in the array
		return binarySearch(nums, target, pivotIndex, nums.length);
	} else {
		return binarySearch(nums, target, 0, pivotIndex);
	}
};

const getPivot = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // console.log('left?', left)
    // console.log('right?', right)
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1; // we know mid cant be the pivot point
    } else {
      right = mid;
    }
  }

  return left;
};

const binarySearch = (nums, target, left, right) => {

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
		if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
	return -1;
};

// console.log(getPivot([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([3], 3));
console.log(search([1,3], 3));
// console.log(search([3,1], 3));
// console.log(search([3,1], 3));
// console.log(search([5,1,3], 3));
