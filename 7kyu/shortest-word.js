// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution

function findShort(s){
    let ans = Number.MAX_SAFE_INTEGER;
    s.split(" ").map((a) => {
      if (a.length<ans)
        ans = a.length;
      console.log(ans);
    });
    return ans;
}

// 2nd solution

function findShort(s){
    return s.split(' ').reduce((a, b) => Math.min(a, b.length), Infinity);
}