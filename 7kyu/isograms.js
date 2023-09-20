// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// My solution

function isIsogram(str){
    //...
    for (let i = 1; i < str.length+1; i++) {
      const substr = str.substr(0, i - 1)+
          str.substr(i, str.length);
      if (substr.toUpperCase().includes(str[i-1].toUpperCase())) {
        //console.log(str.substr(0, i - 1)+str.substr(i,str.length));
        console.log(substr, str[i-1]);
        return false;
      }
    }
    return true;
}

// 2nd solution

function isIsogram(str){
    //...
    return new Set(str.toUpperCase()).size == str.length;
}

// 3rd solution

function isIsogram(str){
    //...
    return !str.match(/([a-z]).*\1/i);
}