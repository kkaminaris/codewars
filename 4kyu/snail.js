// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// My solution

snail = function(array) {
    let result = [],
        roundLength = array.length-1,
        timesRound = Math.floor((array.length+1)/2) - 1,
        position = [0, 0];
    
    if (!array[0].length)
      return result;
    
    result.push(array[position[0]][position[1]]);
    for (let i=timesRound; i>0; i--) {
      for (let j=0; j<roundLength; j++)
        result.push(array[position[0]][++position[1]]);
      for (let j=0; j<roundLength; j++)
        result.push(array[++position[0]][position[1]]);
      for (let j=0; j<roundLength; j++)
        result.push(array[position[0]][--position[1]]);
      for (let j=1; j<roundLength; j++)
        result.push(array[--position[0]][position[1]]);
      result.push(array[position[0]][++position[1]]);
      roundLength -= 2;
    }
    if (array.length%2===0) {
      result.push(array[position[0]][++position[1]]);
      result.push(array[++position[0]][position[1]]);
      result.push(array[position[0]][--position[1]]);
    }
    
    return result;
}