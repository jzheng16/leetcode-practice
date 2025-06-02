// https://leetcode.com/problems/generate-parentheses/


/*

  22. Generate Parentheses
Medium
18.8K
758
Companies
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

*/


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	const output = [];

// Idea is to use recursion to add a ) after a valid (


var dfs = function(left, right, s) {
	// If s is completed (twice the length of n so n = 2 means 4 parantheses)
	if (s.length === n*2) {
		output.push(s);
		return;
	}

	// Do recursion, add ( as long as the number of left parentheses isnt met
	if (left < n) {
		dfs(left + 1, right, s + '(');
	}

	// Now add ) parentheses
	if (right < left) {
		dfs(left, right + 1, s + ')');
	}

}

dfs(0, 0, '');

return output;

};

console.log(generateParenthesis(3));
var generateParenthesis = function(n) {
    
  let stack = [];
  let result = [];

  function backtrack(open, close){

      if(open == close && open == n) {
        console.log('pushed', stack);
          result.push(stack.join(''));
          return;
      }

      if(open < n){
          stack.push('(');
          console.log('open', stack);
          backtrack(open+1, close);
          stack.pop()
      }
      if(close < open){
        console.log('close', stack);
          stack.push(')');
          backtrack(open, close+1);
          stack.pop();
      }

  }
  backtrack(0,0)
  return result
};



generateParenthesis(3)
