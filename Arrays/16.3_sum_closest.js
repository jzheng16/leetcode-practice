/**
 * https://leetcode.com/problems/3sum-closest/?envType=problem-list-v2&envId=array
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

 
 */

[-4,-1,1,2]

// Instead of setting i to the first number, set i to i+1 and setting the fixed number (3rd number to just i)

const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);

  let closest = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(target - sum);
      if (diff < minDiff) {
        minDiff = diff;
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
	return closest;
};
	

console.log(threeSumClosest([-1,2,1,-4],1));

