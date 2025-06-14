/**
 * /**
 * https://leetcode.com/problems/insert-interval/
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/  

const insert = function (intervals, newInterval) {
	let overlappingIndexes = [];
	let [newIntervalStart, newIntervalEnd] = newInterval;
	let res = [];
	let i = 0;
	// push in all intervals that dont overlap with the new interval start

	while (i < intervals.length && intervals[i][1] < newIntervalStart) {
		res.push(intervals[i]);
		i++;
	}

	console.log(res, i);

	// now i should be at an interval where the new start interval is in its range, if so overwrite the new interval start and end to be
	// the min of the two starts and the max of the two ends
	// keep looping until the start interval is > the end of new interval
	while (i < intervals.length && intervals[i][0] <= newIntervalEnd) {
		
		newIntervalStart = Math.min(intervals[i][0], newIntervalStart);
		newIntervalEnd = Math.max(intervals[i][1], newIntervalEnd);
		i++;
		console.log(i);
	}
	res.push(newInterval);
	console.log(res,i);

	// push rest of values in
	res.push(...intervals.slice(i));
	return res;
	

}


console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
// 		[4, 8]
//   )
// );