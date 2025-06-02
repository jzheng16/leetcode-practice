/*
	509. Fibonacci Number
Easy
7.1K
324
Companies
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

var fib = function(n) {
	// Can do with memoization
	// Can also do bottom up?
	// If we know what 0 and 1 is, cant we just add them up?

	let sums = [0, 1, 1, 2];
	if (n <= 3) return sums[n];
	for (let i = 4; i <= n; i++) {
			sums[i] = sums[i - 1] + sums[i - 2];
	} 
	return sums[n];

};


// 1 1 2 3 5 8