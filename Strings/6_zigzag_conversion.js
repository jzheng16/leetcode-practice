//https://leetcode.com/problems/zigzag-conversion/description/



/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	// Create arr of arrs with each index representing the row it is in?

	// Iterate through string filling up each row once first and then doing diagonal.. basically decrementing until you hit first row, then incrementing, then decrementing until str is finished
	const zigzag = [];
	for (let i = 0; i < numRows; i++) {
		zigzag.push([]);
	}

	let curr = 0;
	let reverse = false;

	if (numRows === 1) {
		return s;
	}

	for (let i = 0; i < s.length; i++) {
		// Fill up each array until numRows is reached
		zigzag[curr].push(s[i]);
		
		if (!reverse) {
			curr++;
		} else {
			curr--;
		}
		
		if (curr === numRows) {
			curr-=2;
			reverse = true;
		} else if (curr == -1){
			curr+=2;
			reverse = false;
		}
		
		
		
	}

	let final = "";
	zigzag.forEach(group => final += group.join(''));

	return final;

};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));