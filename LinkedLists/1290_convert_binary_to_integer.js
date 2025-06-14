/**
 * 
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/?envType=problem-list-v2&envId=linked-list
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
 */


function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const getDecimalValue = head => {
	// store values in an array? then loop through and add it up?
	let curr = head;
	let arr = [];
	while (curr) {
		arr.push(curr.val);
		curr = curr.next;
	}

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			sum += Math.pow(2, arr.length - i - 1);
		}
	}
	return sum;
}


let head = new ListNode(
  1,
  new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(0))))
);

console.log(getDecimalValue(head));