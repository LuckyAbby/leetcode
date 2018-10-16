/**
 * Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

 */

/**
 * 思路主要有三种：
 * 1.两次嵌套遍历来判断是否有值相等，但是时间复杂度0(n^2),空间复杂度0(1)
 * 2.先对数组进行排序，再遍历数组判断是否有两个相邻的数相等，时间复杂度0(nlgn),空间复杂度0(1)
 * 3.使用hash map,对数组进行遍历，如果不存在就放进去，存在的话就直接返回true, 时间复杂度0(n),空间0(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};
    for(let i = 0 ; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) return true;
        hash[nums[i]] = i;
    }
    return false;
};