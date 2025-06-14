/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 */

var sortedSquares = function (nums) {
  // Use two pointers, one initialized at left and one at right. Each iteartion, square the two numbers and determine which is larger, if left is larger
  // store that into end of array of new array, and increment left, if right larger, store that and increment right until all numbers have been iterated

  let left = 0;
  let right = nums.length - 1;
  let out = [];
  while (left <= right) {
    if (Math.pow(nums[left], 2) < Math.pow(nums[right], 2)) {
      out.unshift(Math.pow(nums[right], 2));
      right--;
    } else {
      out.unshift(Math.pow(nums[left], 2));
      left++;
    }
  }
  return out;
};
