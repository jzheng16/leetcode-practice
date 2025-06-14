/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Store one into a hash? Loop through other and check?
  const map = new Map();
	if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {		
    if (!map.get(t[j]) || map.get(t[j]) === 0) return false;
    map.set(t[j], map.get(t[j]) - 1);
  }
  return true;
};



console.log(isAnagram("aacc", "ccac"));