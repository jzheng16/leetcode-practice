/*
  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Sort and then loop through 
  nums.sort((a,b) => a-b);
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};

// Another approach, find sum from 0 to n and find sum of nums array and then subtract the two to ge tthe missing number