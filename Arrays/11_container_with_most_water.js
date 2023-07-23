/*

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // brute force O(n^2) time complexity
  // Take each index in the array and loop through calculating the max of the two times the distance
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;

};



/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 2 pointer
  // start at each end, and then advance the pointer with the lower height to the next
  // concept is the area is limited by the smaller side
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    if (area > max) {
      max = area;
    }
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))