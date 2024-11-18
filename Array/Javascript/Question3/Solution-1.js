let arr3 = [7, 10, 4, 3, 20, 15];
let k = 3;
arr3.sort((a, b) => a - b);
let kthMin = arr3[k - 1]; 
let kthMax = arr3[arr3.length - k]; 
console.log("Kth Min:", kthMin, "Kth Max:", kthMax);