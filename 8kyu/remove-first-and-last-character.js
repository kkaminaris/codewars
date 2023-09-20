// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// My solution

function removeChar(str){
    //You got this!
     return str.substr(1, str.length-2);
}

// 2nd solution

function removeChar(str){
    //You got this!
     return str.slice(1,-1);
}

// 3rd solution

function removeChar(str){
    //You got this!
     return str.substring(1, str.length-1);
}