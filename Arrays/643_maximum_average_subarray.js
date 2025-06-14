/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 * 
 * You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000

 
 */

const findMaxAverage = function (nums, k) {
  // Start our window at index 0 and ending at 0 + k - 1, find the average by taking the sum and dividing by length of window. If it is greater than the current
  // average, then replace that avg. Next keep shifting the window to the right since the length k is fixed?

  let maxAverage = -Infinity;
  let left = 0;
  let sum = 0;
  let count = 0;
  while (left < nums.length - k + 1) {
    sum += nums[left + count];
    // Count will only grow the first time around, afterwards count stays at 3 and we just shift the window one unit to right and remove that left value from the sum
    if (count === k - 1) {
      maxAverage = Math.max(maxAverage, sum / k);
      sum = sum - nums[left];
      left = left + 1;
    } else {
      count++;
    }
  }

  return maxAverage;
};


// Alternative solution is to build the first subarray first and then update as necessary
2/4 = .5

// 2 + 50 - 1 = 51

// [1,12,-5,-6,50,3] k = 4
const findMaxAverage = function (nums, k) {
	// build first subarray
	
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum+=nums[i];
	}
	let maxAverage = sum / k;

	for (let right = k; right < nums.length; right++) {
		sum = sum + nums[right] - nums[right - k];
		maxAverage = Math.max(maxAverage, sum/k);
	}
	return maxAverage;
}

// s = "1101100111"

const longestSeries = (s) => {
	// Find longest length of consectutive ones
	// Start our window at first number, see if it is a 1, if it keep extending the window to the right
	// If it is a 0, track it and keep shifting to the right until we see another 0,
	// once we do, start decreasing the window from the left, until the first 0 is removed and then continue expanding to the right
	let currMax = 0;
	let numberOfZeros = 0;
	let right = 0;
	let left = 0;
	let curr = 0;
	while (right < s.length) {
		
		if (s[right] === "0") {
      numberOfZeros++;
      console.log("here1");
			right++;
    } else {
      curr++;
      right++;
      currMax = Math.max(currMax, curr);
    }

		if (numberOfZeros > 1) {
			// increment the left until the 0 is passed
			while(s[left] === '1') {
				console.log('here', s[left])
				left++;
				curr--;
			}
			// increment one more time to pass the 0
			left++;
			curr--;
			numberOfZeros--;
		} 

	}
	return currMax;

}






console.log(longestSeries("1101100111"));




