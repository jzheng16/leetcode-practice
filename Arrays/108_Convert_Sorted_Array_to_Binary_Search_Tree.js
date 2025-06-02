/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.
 */

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

	// Choose halfway point as center? And then loop through 0 to half and put on left side and then half + 1 to length put on right side?

	// What if nums is 1?
	console.log(nums)

	if (!nums.length) {
		return null;
	}

	const midIndex = Math.floor(nums.length / 2);

	const tree = new TreeNode(nums[midIndex]);

	tree.left = sortedArrayToBST(nums.slice(0, midIndex));
	tree.right = sortedArrayToBST(nums.slice(midIndex + 1, nums.length));

	return tree;



};


function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}


// const tree = sortedArrayToBST([1,2,3,4,5,6,7,8,9,10]);

function printInOrder(tree) {

	if (!tree) {
		return;
	}

	console.log(tree.val);
	
	printInOrder(tree.left);
	
	printInOrder(tree.right);
}

// printInOrder(tree);

const x = [1];
console.log(x.slice(0,0))