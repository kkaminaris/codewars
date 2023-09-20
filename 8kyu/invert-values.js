// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

// My solution 

function invert(array) {
    let iarray = [];
    for (i in array) {
      iarray.push(-array[i]);
    }
     return iarray;
}

// 2nd solution 

function invert(array) {
    return array.map(num => -num);
}