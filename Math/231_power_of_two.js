/*

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // Recursion: keep adding 1 to the pow until 2^pow exceeds n
  if (n !== 1 && n % 2 === 1) {
    return false;
  }
  
  const x = (pow) => {
    if (Math.pow(2, pow) > n) {
      return false;
    }
    if (Math.pow(2, pow) === n) {
      return true;
    }

    return x(pow + 1)
  }

  return x(0);

  
};

// Better solution, just a simple while loop

var isPowerOfTwo = function(n) {
  let x = 0;
  while (Math.pow(2, x) < n) {
    x++;
  }
  return Math.pow(2, x) === n;
}