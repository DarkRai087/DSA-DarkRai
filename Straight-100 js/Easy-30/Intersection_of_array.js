// 10. Find the Intersection of Two Arrays
// Description: Find common elements between two arrays.

function FindCommon(arr,arr2){
    const set = new Set(arr)
    return  arr2.filter(i=>set.has(i))
}

console.log(FindCommon([1,2,3,],[2,3]));
console.log("Test Case 1:", FindCommon([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
console.log("Test Case 2:", FindCommon([5, 6], [7, 8])); // Output: []