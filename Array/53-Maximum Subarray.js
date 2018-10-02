/*
*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrqay = function(nums) {
    let max = nums[0];
    let sum = nums[0];
    for(let i = 0; i < nums.length-1; i++) {
        if(sum + nums[i+1] < nums[i+1]) {
            sum = nums[i+1];
        } else {
            sum += nums[i+1];
        }
        max = Math.max(sum, max);
    }
    return max;
}