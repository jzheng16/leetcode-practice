/**
 * https://leetcode.com/problems/daily-temperatures/
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
  // brute force.. nested loop comparing first temperature until you see a future temperature that is greater then break
  // last number in array is always 0 since no future days
  // wont pass leetcode

  // better solution: store each index into a stack, iterate through the temperatures arr and keep checking if the most recent temperature in
  // the stack is less than the current temperature, if so update that index in the result array and remove it from the stack

  // the trick here is each time you look at a new temperature, you are comparing it with each value in the stack, if it happens to be greater, then it will
  // essentially clear any temps in the stack that is less than the current one, any remaining values in the stack is just going to be set to 0
  let answers = new Array(temperatures.length).fill(0);

  // Create a stack to keep track of indexes of temperatures

  const stack = [];
  for (let i = 0; i < answers.length; i++) {
    let currIndex = -1;

    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      answers[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }

    // store
    stack.push(i);
  }

  return answers;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 40, 50, 60]));
