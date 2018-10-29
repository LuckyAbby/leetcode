/**
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 思路是将数组进行降序排序，使用sort直接进行排序，但是需要在排序完的数组中找出第三大的的数之前重复的数的个数，这样就能找出第三大的数的位置。
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a);
    let i = 0, j = 1, depCount = 0,differentNum = 1; 
    while(i < nums.length - 1) {
        if(nums[j] === nums[i] && differentNum < 3) {
            depCount++;
        } else if(nums[j] !== nums[i]){
            differentNum++;
        }
        i++;
        j++
    }
    if (differentNum < 3) return nums[0];
    return nums[depCount+2];
};