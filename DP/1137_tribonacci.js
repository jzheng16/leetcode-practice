/*

  1137. N-th Tribonacci Number
Easy
3.7K
164
Companies
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537


*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // Bottom up approach (solving 0, 1, 2 first and storing it in a table)
    let results = [0,1,1];
    if (n <= 2) return results[n];

    for(let i = 3; i <= n; i++) {
      results[i] = results[i - 3] + results[i - 2] + results[i - 1];
    }

    return results[n];


};