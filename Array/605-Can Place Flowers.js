/**
 * Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 主要是看两个相邻的空格有没有被种上
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0 && flowerbed[i-1] !==1 && flowerbed[i+1] !== 1) {
            flowerbed[i] = 1;
            n --;
        }
    }
    return n <= 0 ? true : false;
};