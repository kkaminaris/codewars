// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// My solution

function findUniq(arr) {
    // do magic
    for (let i in arr) {
      if (!+i && arr[i]-arr[+i+1] && !(arr[+i+1]-arr[+i+2]))
        //console.log(arr[i]);
        return arr[i];
      if (i==arr.length-1 && arr[i]-arr[i-1])
        //console.log(arr[i]);
        return arr[i];
      if (arr[i]-arr[+i+1] && arr[i]-arr[i-1])
        //console.log(arr[i]);
        return arr[i];
    }
}

// 2nd solution

function findUniq(arr) {
    // do magic
    arr.sort();
    return arr[0]==arr[1] ? arr.pop() : arr[0];
}
  