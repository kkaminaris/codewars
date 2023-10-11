// Wikipedia: Combination lock

//     Customarily, a lock of this type is opened by rotating the dial clockwise to the first numeral, counterclockwise to the second, and so on in an alternating fashion until the last numeral is reached.

// In this kata, you must create a function that returns a list/array showing the initial dial after each rotation in the combination.

//     dial -> a square or diamond shaped list/array of any size greater than 2

//     // Square
//     [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//     // Diamond (the above array rotated 45 degrees clockwise)
//     [[1], [4, 2], [7, 5, 3], [8, 6], [9]]

//     combination -> a list/array of integers randomly chosen from the degrees in the picture below

// Examples


// > combinationLock([[1, 2], [3, 4]], [45, 315, 135])
// [ [ [ 1 ], [ 3, 2 ], [ 4 ] ],
//   [ [ 2 ], [ 1, 4 ], [ 3 ] ],
//   [ [ 3 ], [ 4, 1 ], [ 2 ] ] ]

// > combinationLock([[1], [3, 2], [4]], [225, 90, 270])
// [ [ [ 2, 4 ], [ 1, 3 ] ],
//   [ [ 3 ], [ 4, 1 ], [ 2 ] ],
//   [ [ 2 ], [ 1, 4 ], [ 3 ] ] ]

// > combinationLock([[1, 2], [3, 4]], [0, 45, 90, 135, 180, 225, 270, 315])
// [ [ [ 1, 2 ], [ 3, 4 ] ],       // 0 degrees
//   [ [ 1 ], [ 3, 2 ], [ 4 ] ],   // 45 degrees
//   [ [ 3, 1 ], [ 4, 2 ] ],       // 90 degrees
//   [ [ 3 ], [ 4, 1 ], [ 2 ] ],   // 135 degrees
//   [ [ 4, 3 ], [ 2, 1 ] ],       // 180 degrees
//   [ [ 4 ], [ 2, 3 ], [ 1 ] ],   // 225 degrees
//   [ [ 2, 4 ], [ 1, 3 ] ],       // 270 degrees
//   [ [ 2 ], [ 1, 4 ], [ 3 ] ] ]  // 315 degrees

// If you have any feedback, feel free to leave a comment and/or raise an issue!

// My solution

function combinationLock(dial, combination) {
  
    let copy = dial;
    
    let result = [];
    
    const isSquare = () => {
      if (dial.length==1)
        return true;
      return dial[0].length==dial[1].length;
    }
    
    const rotateRight = () => {
      let temp = [];
      if (isSquare()) {
        let length = dial[0].length;
        for (let i=0; i<length; i++) {
          temp[i] = [];
          for (let j=0; j<=i; j++)
            temp[i].push(dial[i-j][j]);
        }
        for (let i=1; i<length; i++) {
          temp[length+i-1] = [];
          for (let j=1; j<length-i+1; j++)
            temp[length+i-1].push(dial[length-j][j-1+i]);
        }
      }
      else {
        let length = dial[(dial.length-1)/2].length;
        for (let i=0; i<length; i++) {
          temp[i] = [];
          for (let j=length-1+i; j>i-1; j--)
  //           console.log(j, Math.min(i, length-1+i-j));
            temp[i].push(dial[j][Math.min(i, length-1+i-j)])
        }
      }
      dial = temp;
    };
    
    for (let i=0; i<combination.length; i++) {
      for (let j=0; j<combination[i]/45; j++)
        rotateRight();
      result.push(dial);
      dial = copy;
    }
    
    console.log(result);
    return result;
    
}