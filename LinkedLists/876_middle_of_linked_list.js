/**
 * https://leetcode.com/problems/middle-of-the-linked-list/description/?envType=problem-list-v2&envId=linked-list
 * Given the head of a singly linked list, return the middle node of the linked list.

	 If there are two middle nodes, return the second middle node.
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Keep a counter so we can determine how many elements there are? Then just loop again to that one and return it?

const middleNode = (head) => {
	let curr = head;
	let count = 1;
	while (curr.next) {
		curr = curr.next;
		count++;
	}
	console.log('waht is count', count);

	// Count should now be the total number of nodes.
	// Divide and round up
	const targetPosition = Math.floor(count / 2) + 1;
	let targetCount = 1;
	let curr1 = head;
	while (targetCount !== targetPosition) {
		curr1 = curr1.next;
		targetCount++;
	}
	return curr1;

}


let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(middleNode(head));

// Alternative solution is a fast pointer and a slow pointer, once the fast pointer hits a null, the slow pointer should be at the mid point (does this account for returning the 2nd middle node?)

const middleNode1 = head => {
	let slow = head;
	let fast = head;
	while (slow.next && fast.next) {
		slow = slow.next;
		fast = fast.next.next; 
	}
	return slow;
}