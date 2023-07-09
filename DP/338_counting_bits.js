/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 
Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10


Input: n = 5
Output: [0,1,1,2,1,2, 2, 3, 1, 2, 2, 3, 2, 3, 4, 1,  ]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
6 --> 110
7 --> 111
8 --> 1000
9 ->> 1001
10 -  1010
11 -  1011
12 -  1100
13 -  1101
14 -  1110
15 - 1111
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // Couldn't figure it out
  // If i is divisible by 2 then it is a multiple of two and therefore always has the same number of 1s as i / 2 + another 0 
  // Else its an odd number then it is always just the previous + 1 
  const res = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    if (i % 2 === 0) {
      res[i] = res[i/2];
    } else {
      res[i] = res[i-1] + 1;
    }
  }

  return res.slice(0, n + 1);
 
};