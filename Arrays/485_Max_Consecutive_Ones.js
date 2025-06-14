/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

 
 */


// [1,1,0,1,1,1]
const findMaxConsecutiveOnes = nums => {
	// Keep going until we hit a 0, if we hit a 0 keep incrementing left until we pass that 0 and then start incrementing right again
	let max = 0;
	let left = 0;
	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) {
			// we keep incrementing left?
				while (nums[left] !== 0) {
					left++;
				}
				left++;
			}

			max = Math.max(max, right - left + 1);
		}
		return max;
	}

