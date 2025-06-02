// https://leetcode.com/problems/number-of-1-bits/?envType=study-plan-v2&envId=top-interview-150

/* Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight). */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.log(n, typeof n);
    //return n.split('')
    let max  = 31;
    let count = 0;
    while(n > 0) {
        if (n - Math.pow(2, max) >= 0) {
            n = n - Math.pow(2, max);
            count++;
        }
        max--;
				// console.log(max)
    }
    return count;
};

//console.log(hammingWeight(00000000000000000000000000001011));
console.log(hammingWeight(11111111111111111111111111111101));