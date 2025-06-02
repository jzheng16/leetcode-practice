// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/*

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
		let arr = [];
    // How do we tell if two nodes intersect? If all the values after the intersection match?
		// Store each node inside some data structure and see if we find the same one?

	 	while(headA.next) {
			arr.push(headA);
			headA = headA.next;
		}

		while (headB.next) {
			if (arr.indexOf(headB) > -1) {
				return headB;
			}
			headB = headB.next;
		}

		return null;
		


};

const intersection = new ListNode(8);
intersection.next = new ListNode(4);
intersection.next.next = new ListNode(5);

const ll1 = new ListNode(4);

ll1.next = new ListNode(1);
ll1.next.next = intersection;



const ll2 = new ListNode(5);
ll2.next = new ListNode(6);
ll2.next.next = new ListNode(1);
ll2.next.next.next = intersection;

console.log(getIntersectionNode(ll1, ll2));


