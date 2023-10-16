// Write a function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

// The function accepts two parameters: a matrix, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".
// Examples

// For matrix:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Clockwise rotation:

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// Counter-clockwise rotation:

// [
//   [3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]
// ]

// My solution

function rotate(matrix, direction) {
    let result = [];
    if (direction=='clockwise')
      for (let j=0; j<matrix[0].length; j++) {
        console.log('clock');
        result[j] = [];
        for (let i=matrix.length-1; i>=0; i--) {
          result[j].push(matrix[i][j]);
        }
      }
    else 
      for (let j=0; j<matrix[0].length; j++) {
        console.log('counter');
        result[j] = [];
        for (let i=0; i<matrix.length; i++) {
          result[j].push(matrix[i][matrix[0].length-1-j]);
        }
      }
    console.log(result);
    return result;
}