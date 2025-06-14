/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Constraint: t must be subarray of s
  // Store t in a hash map and a counter that keeps track of how many elements are in the subsequence
  // when to expand / contract? If
  // should we expand to the end and then keep sizing down until we cant any longer (counter > 0)
  // store frequency of each character of s into hash map

  let map = {};

  for (let j = 0; j < t.length; j++) {
    map[t[j]] = map[t[j]] ? map[t[j]] + 1 : 1;
  }

  let counter = t.length; // will be used to keep track of how many characters are in the current subarray

  let left = 0;
  let right = 0;
  let start;
  let end;
	let currMinWindow = Infinity;

  while (right < s.length) {
    const currLetter = s[right];

    if (map[currLetter] > 0) {
			counter--;
    }

		map[currLetter] = map[currLetter] === undefined ? -1 : map[currLetter] - 1;
	
		right++;
    // eventually if there is a valid substring, the counter will reach 0, when this happens, decrease window and record
    while (counter === 0) {

			// record length of curr subarray
			if (right - left < currMinWindow) {
				currMinWindow = right - left;
				start = left;
				end = right;
			}

			// Increment that value why? adding that letter back into the pool
			const currLetter = s[left];
			map[currLetter]++;

			// This just adds that letter back into the pool if it is a letter in the string t, there is a chance no more valid substrings are found after this
      if (map[currLetter] > 0) {
        counter++;
      } 
			
			left++
    }
		
  

  }
  return currMinWindow === Infinity ? "" : s.slice(start, start+currMinWindow);
};



console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("ab", "a"));
// console.log(minWindow("acbbaca", "aba"));