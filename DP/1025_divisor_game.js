/*
  1025. Divisor Game
Easy
1.9K
3.9K
Companies
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.

 

Example 1:

Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.
Example 2:

Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

*/


/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    // Two base cases, if n = 2 (or even), then Alice wins
    // if n = 3 (or odd), then Bob wins
    // Everything is divisble by 1 so the optimal way to play is just subtracting 1 every time? 
    return n % 2 === 0;
};