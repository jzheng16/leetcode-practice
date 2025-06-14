# Concepts

Below is a list of common concepts and strategies that can be utilized in order to approach solving leetcode problems easier

# Table of Contents
* [Two pointers](#two-pointers)

## Two Pointers

Two pointers is a common technique that can be used to solve array and string problems. The idea is to have two iterators that move along anything iterable (like strings and arrays). More commonly, we hae one pointer starting at left and one pointer starting at right (length -1).

1. Initialize one pointer at 0 and one pointer at `length-1`
2. Use a while loop until the pointers are equal to each other
3. Iterate and move the pointers closer to each other. This can mean incrementing the left, decrementing the right, or both.

This results in a time complexity that is less than O(n) making it O(1).

Common problems that can be solved using the two pointer technique:

1. isPalindrome
2. TwoSum WITH a sorted array
3. Given two sorted arrays, arr1, and arr2, return a new array that combines both of them and is sorted
4. isSubsequence (https://leetcode.com/problems/is-subsequence/description/)

## Sliding Window

Sliding window is implemented using two pointers. Something to know before understanding sliding window is what subarrays are.

A subarray of an array is an array that represents a contiguous section of the array. For example:

Given array [1,2,3,4]

Subarrays include [1],[2],[3],[4], [1,2], [1,2,3] and so on. 

Subarrays can be defined by a start and end index or also known as left bound and right bound. Another word for subarray is window.

Problems that involve subarrays usually ask for "valid" subarrays AKA subarrays that meet a certain requirement (ex: sum of subarray is <= 10)

The initial step is to set our "window" at the first element (`left=right=0`) and then expand / contract our window (expand by incrementing right pointer and contract by incrementing left pointer).

TIP: If a problem asks you if subarrays are valid or to find these subarrays, sliding window is usually the technique to use. (ex: longest valid subarray, or number of valid subarrays)

More examples


    Find the longest subarray with a sum less than or equal to k (constraint metric = sum)
    Find the longest substring that has at most one "0" (constraint metric = number of zeroes)
    Find the number of subarrays that have a product less than k (constraint metric = product)
 

 How many subarrays are there? For an array with length n, it is (n*(n+1)) / 2

 Sliding window is efficient because most algorithms that check every subarray will be O(n^2) while sliding window is at most O(2n) (left can move n times, right can move n times)

 Common problems that can be solved using sliding window:

 1. Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k

 *NOTE* The number of valid windows ending at index `right` is equal to the size of the window which is `right - left + 1`