/**
 * https://leetcode.com/problems/merge-k-sorted-lists/?envType=problem-list-v2&envId=linked-list
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

 */



 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 let head = new ListNode(
   1,
   new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(0))))
 );

 let head1 = new ListNode(
   2,
   new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(0))))
 );

 let head2 = new ListNode(
   3,
   new ListNode(0, new ListNode(1, new ListNode(1, new ListNode(0))))
 );

 let test = [head, head1, head2];
 let test1 = [];
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Just loop through each linked list and push the values to an array and sort it then recreate a linked list?
		const combined = [];
		console.log(lists);

		for (let i = 0; i < lists.length; i++) {
				let curr = lists[i];
				console.log('curr?', curr)
				while (curr) {
					combined.push(curr.val);
					curr = curr.next;
				}
			
		}
		combined.sort((a, b) => a - b);
		console.log('combined', combined);

		if (combined.length === 0) return null;

		let newList = new ListNode(combined[0]);
		let curr = newList;
		for (let i = 1; i < combined.length; i++) {
			curr.next = new ListNode(combined[i]);
			curr = curr.next;

		}
		return newList;

};

// console.log(mergeKLists(test));
console.log(mergeKLists(test1));

// Another solution is to merge 2 at a time?