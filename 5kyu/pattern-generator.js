// Pattern Generator

// create a function that accepts 1 (one) parameter and returns a string that has such a pattern:

//     parameter: 1, generate pattern:

//     x```

//         parameter: 2, generate pattern:

//     x
//     x x
//     x

//         parameter: 3, generate pattern:

//      x
//       x
//     x o x
//     x
//      x

//         parameter: 4, generate pattern:

//       x
//        x
//       o x
//     x o o x
//     x o
//      x
//       x

//         parameter: 5, generate pattern:

//        x
//         x
//        o x
//         o x
//     x o x o x
//     x o
//      x o
//       x
//        x

//         parameter: 6, generate pattern:

//         x
//          x
//         o x
//          o x
//         x o x
//     x o x x o x
//     x o x
//      x o 
//       x o
//        x 
//         x

// and so on...

// assume that:

//     N is an integer within range [-100..200]

//     the function should return empty string if given parameter lower than 1

// additional info

// the result is compared with smart algorithm, so you don't have to worry about additional space characters that's not visible.
// for example, this string:

//     x    \n     x   \n    o x  \n     o x \nx o x o x\n x o     \n  x o    \n   x     \n    x    \n

// which is seen as:

//     x    
//      x   
//     o x  
//      o x 
// x o x o x
//  x o     
//   x o    
//    x     
//     x    

// is treated the same as:

//     x\n     x\n    o x\n     o x\nx o x o x\n x o\n  x o\n   x\n    x

// which is seen as:

//     x
//      x
//     o x
//      o x
// x o x o x
//  x o
//   x o
//    x
//     x

// because both are visibly the same.

// My solution

function patternGenerator(c) {

    let result = "";
    
    if (c<1)
      return result;
    
    if (c==1)
      return "x";
    
    let startSpace = c-1;
    for (let i=0; i<c-1; i++){
      result += " ".repeat(startSpace);
      let chars = Math.floor(i/2) + 1;
      for (let j=0; j<chars; j++)
        result += Math.floor(i/2)%2 ? j%2 ? "x " : "o " : j%2 ? "o " : "x ";
      result += "\n";
      startSpace = i%2 ? startSpace - 1 : startSpace + 1;
    }
    
    for (let i=0; i<c/2; i++) 
      result += i%2 ? "o " : "x ";
    if (c%2)
      for (let i=Math.floor(c/2) + 1; i<c; i++)
        result += i%2 ? "o " : "x ";
    else
      for (let i=Math.floor(c/2); i<c; i++)
        result += i%2 ? "x " : "o ";
    result += "\n";
    
    for (let i=0; i<c-1; i++) {
      result += " ".repeat(i+1);
      let chars = (c-i-1)/2;
      for (let j=0; j<chars; j++)
        result += j%2 ? "o " : "x ";
      result += "\n";
    }
    return result;
}