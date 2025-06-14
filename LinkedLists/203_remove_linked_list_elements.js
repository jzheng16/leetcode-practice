/**
 * 
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *  Input: head = [1,2,6,3,4,5,6], val = 6
		Output: [1,2,3,4,5]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const removeElements = (head, val) => {
  // Use a dummy node as a starting point to solve the edge case of the head needing to be removed?

  let temp = new ListNode(0, head);
  let curr = temp;
  // temp next points to head
  while (curr.next !== null) {
    if (curr.next.val === val) {
      // point the curr next to the node after
      curr.next = curr.next.next;
    } else {
			// move to next node
      curr = curr.next;
    }
  }

  // return temp.next since the head is effectively a dummy node
  return temp.next;
};

// Test dummy data
let head = new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(4)))));

console.log(head);
console.log(removeElements(head, 3));


const addElement = (head, val, position) => {
	// Need a counter to keep track of where we are in the linked list?
	// assumption is everything gets shifted right
	// if head.. just create new linked list and point its next to head
	if (position === 0) {
		let newElement = new ListNode(val);
		newElement.next = head;
		head = newElement;
		return newElement;
	}
	
	// loop until the position - 1 node, take its next value and set it to the new element, set its next next value to the curr next element?
	let count = 0;
	let curr = head;
	while (count !== position - 1) {
		curr = curr.next;
		count++;
	}

	let tmp = curr.next;
	curr.next = new ListNode(val, tmp);
	
	return head;
}

console.log(addElement(head, -100, 2));