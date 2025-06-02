/**
 * @param {number} n
 * @return {boolean}
 * 
 * Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.


 */
var isThree = function (n) {
	let divisors = 0;
	let curr = n;
	while (curr > 0) {
		if (Math.floor(n / curr) === n / curr) {
			divisors++;
		}

		if (divisors > 3) {
			return false;
		}

		curr--;
	}
	return divisors === 3 ? true : false;

};

console.log(isThree(2));
console.log(isThree(4));