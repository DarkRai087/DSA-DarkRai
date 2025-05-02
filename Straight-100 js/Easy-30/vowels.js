// 8. Count the Number of Vowels in a String
// Description: Count the number of vowels (a, e, i, o, u) in a string.

function vowels(s){
    const matches= s.toLowerCase().match(/[aeiou]/g)
    return matches? matches.length:0 
}
console.log("Test Case 1:", vowels("hello")); // Output: 2
console.log("Test Case 2:", vowels("why")); // Output: 0