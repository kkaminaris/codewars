// You are given a matrix M, of positive and negative integers. It should be sorted in an up and down column way, starting always with the lowest element placed at the top left position finishing with the highest depending on n value: at the bottom right position if the number of columns,n, is odd, or placed at the top right, if n is even.

// E.g.:

// M = [[-20, -4, -1],
//      [  1,  4,  7], 
//      [  8, 10, 12]]
     
// M_ = [[-20, 7, 8],
//       [-4, 4, 10],
//       [-1, 1, 12]]

// In order to be more understandable we show the directions of the sorting for the new matrix with arrows:

// [source: imgur.com]

// Create the function up_down_col_sort() that receives a matrix as an argument and may do this kind of sorting.

// Your function will be tested with square or rectangular matrices of m rows and n columns Features of the random tests:

// Number of tests = 120
// 10 <= m <= 200
// 10 <= n <= 200
// -1000 <= M[i,j] <= 1000

// The kata is available at Python 2, Typescript, Javascript and Ruby at the moment. Translations into another languages will be released soon.

// My solution

function upDownColSort(matrix) {
    let vector = matrix.reduce((s, row) => {return s.concat(row)}, []);
    vector.sort((a, b) => a-b);
    console.log(vector);
    let odd = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      if (odd) {
        for (let i = matrix.length-1; i > -1; i--) {
          matrix[matrix.length - i - 1][j] = vector[j*matrix.length + i];
        }
      }
      else {
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][j] = vector[j*matrix.length + i];
        }
      }
      odd = odd^1;
    }
    return matrix;
}