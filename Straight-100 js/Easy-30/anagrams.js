function areAnagrams(str1, str2) {
return str1.split("").sort().join("") === str2.split("").sort().join("")

}

// Example usage:
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));   