/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // const result = [];
    // for(let i = 1; i <= nums.length; i++) {
    //     if(nums.indexOf(i) === -1) result.push(i);
    // }
    // return result;
    const hash = {};
    nums.map((val, index) => hash[index+1] = index+1)
    nums.map(val => delete hash[val]);
    return Object.values(hash);
};