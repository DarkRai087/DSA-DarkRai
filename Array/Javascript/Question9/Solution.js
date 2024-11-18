let arr9 = [1, 2, 3, 5]; 
let n = arr9.length + 1; 
let expectedSum = (n * (n + 1)) / 2; 
let actualSum = arr9.reduce((sum, num) => sum + num, 0);
let missingNumber = expectedSum - actualSum;
console.log("Missing Number:", missingNumber);