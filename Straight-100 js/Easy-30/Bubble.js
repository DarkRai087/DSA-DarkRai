// 9. Implement Bubble Sort
// Description: Sort an array of integers using the bubble sort algorithm.

function bubble(arr){
    const n =arr.length
    for(let i=0;i<n-1;i++){
        for(let j = 0 ; j<n-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
return arr

}
console.log("Test Case 1:", bubble([5, 3, 8, 1])); // Output: [1, 3, 5, 8]
console.log("Test Case 2:", bubble([9, 2, 7, 4])); // Output: [2, 4, 7, 9]