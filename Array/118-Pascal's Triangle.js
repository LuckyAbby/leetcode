/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let row = [];
    let result = [];
    for(let i = 0; i < numRows; i++) {
        row.push(1);
        for(let j = i-1; j > 0; j--) {
            row[j] = row[j-1] + row[j];
        }
        result[i] = row.slice();
    }
    return result;
};