// https://leetcode.com/problems/add-digits/description/

/*
	Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0

*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
			// convert to string and then add each integer
			num = num.toString().split('').reduce((sum, num) => {
				return sum + parseInt(num);
			}, 0);
		}
		return num;
};

console.log(addDigits(38));