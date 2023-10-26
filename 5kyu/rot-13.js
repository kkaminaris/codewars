// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// My solution

function rot13(message){
    return message.replace(/([A-Za-z])/g, function($1) {
      console.log($1);
      if ($1 === $1.toLowerCase()) 
        return String.fromCharCode(($1.codePointAt(0)+13)%97%26+97);
      return String.fromCharCode(($1.codePointAt(0)+13)%65%26+65);
    });
}