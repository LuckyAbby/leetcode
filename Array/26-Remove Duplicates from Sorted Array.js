/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
*/

/**
 * 思路：
 * 用两个指针来解决。两个指针主要是考虑两个问题：1.指针什么时候往后面走 2.什么时候调换指针的位置。
 * 在这里，第一个指针来遍历当前的数组，第二个指针用来指向移除重复数值之后每个元素的位置，当不等时，第二个指针后移。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let link = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[link] !== nums[i]) {
            nums[++link] = nums[i];
        }
    }
    return link+1;
};