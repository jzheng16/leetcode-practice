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
