// var search = function (nums, target) {
//   // start at middle and increment / decrement depending ontarget
//   let mid = Math.floor(nums.length / 2);
//   //[-1,0,3,5,9,12],

// 	if (nums[mid] === target) return mid;

// 	let direction = nums[mid] > target ? 'left' : 'right';
	
// 	if (direction  === 'left') {
// 		for (let i = mid; i >= 0; i--)  {
// 			if (nums[i] === target) {
// 				return i;
// 			}
// 		}
// 	} else {
// 		for (let i = mid; i < nums.length; i++) {
//       if (nums[i] === target) {
//         return i;
//       }
//     }
// 	}
	

//   return -1;
// };


// Alternative solution: use two pointers and increment / decrement depending on whether the mid (Math.floor(left + right /2)) is higher or lower than the target

var search = function (nums, target) {
	// start at middle and increment / decrement depending ontarget
  let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		}
		
		if (nums[mid] > target) {
			right--;
		} else {
			left++;
		}
		
	}
	
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 2));