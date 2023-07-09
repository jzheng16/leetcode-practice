/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // Brute force approach: 2 loops nested if match, calculate abs
  if (nums.length === 0 || nums.length === 1) return false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

// Optimal solution O(n) uses map
function containsNearbyDuplicate(nums, k) {
  // Create an empty object to store the last index of each number in nums
  let map = {};
  // Iterate through each number in nums
  for (let i = 0; i < nums.length; i++) {
    // If the current number is already in map and its last index is within k distance from current index, return true
    if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
      return true;
    }
    // Update the last index of the current number to its current index
    map[nums[i]] = i;
  }
  // Return false if no such pair exists
  return false;
}
