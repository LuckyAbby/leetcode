/**
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
思路：和前一题类似，使用hash存放每个数的位置，如果i-hash[nums[i]<k则返回true,否则就把i赋值给hash[nums[i]]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(i - hash[nums[i]] <= k) return true;
        hash[nums[i]] = i;
    }
    return false;
};