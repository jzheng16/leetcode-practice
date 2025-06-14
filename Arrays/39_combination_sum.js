/**
 * https://leetcode.com/problems/combination-sum/description/?envType=problem-list-v2&envId=array
 * 
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

 */

const combinationSum = (candidates, target) => {
	let out = [];
	function makeCombo(combo, sum, i) {
		if (sum === target) {
			// push in a COPY of combo, if you dont, the mutable methods used below will overwrite and mutate combo
			out.push([...combo]);
			return; 
		}

		if (sum > target || i >= candidates.length) {
			return;
		}

		combo.push(candidates[i]);
		makeCombo(combo, sum + candidates[i], i);
		// at this point, combo should contain values that either exceed the target or match the target, in any case, pop the most recent value and try other cases?
		combo.pop();
		makeCombo(combo, sum, i + 1); // possibility of exceeding length when doing i+1 so needs to be accounted for in base case. pass in sum


	}
	makeCombo([], 0, 0);
	return out;

}

// Try [2] then [2,2], then [2,2,2], then [2,2,2,2], if the total exceeds the target, back track and try other numbers [2,2,2,2,2,2] , [2,2,2,2,3], [2,2,2,3], [2,2,3], [2,3], [3], [3,3] 
// Recursion

// Backtracking, testing each combo and then backtracking

console.log(combinationSum([2, 3, 5], 8));