// Find the missing number in an array (1 to n).

// Approach 1: Using the Sum Formula

let findMiss = function(arr,n){
expectedSum= n*(n+1)/2
Totalsum= 0
for(let i = 0 ;i<arr.length; i++){
    Totalsum +=arr[i]
}
return expectedSum - Totalsum

}
let arr = [1, 2, 4, 5];
console.log(findMiss(arr,5));

// Approach 2: sorting

let Sort = function(arr,n){
    let sortArr= arr.sort();
    for(let i =0; i<arr.length;i++){
        if(sortArr[i] != i+1){
            return i+1
        }

    }
    return n
}

console.log(Sort(arr,5));