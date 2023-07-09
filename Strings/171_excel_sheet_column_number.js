/* 
  https://leetcode.com/problems/excel-sheet-column-number/
  Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
  For example:
  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28 
...

*/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const OFFSET = 64;
  let sum = 0;
  // Exponetial? Go through each one and multiply it by 26^?
  // Get unicode value and then subtract by offset
  for (let i = 0; i < columnTitle.length; i++) {
    const value = columnTitle.charCodeAt(i) - OFFSET;
    sum += Math.pow(26, columnTitle.length - 1 - i) * value;
  }
  return sum;

  

};