// Move all zeros in an integer array to the end, keeping the order of non-zero elements the same, and modify the array in-place without using extra space.

// Examples:

//     Input: [0,1,0,3,12] → Output: [1,3,12,0,0]
//     Input: [0] → Output: [0]

// Test cases
let Test = [0,1,0,3,12]
let Test2 = [0]

// approach 1 
function approach1(arr){
const zero=arr.filter(x=>x===0)
const NonZero=arr.filter(x=> x!==0)
const final = [...NonZero,...zero]
return final
}
console.log("approach 1");

console.log(approach1(Test));
console.log(approach1(Test2));
console.log("------------------");

// approach 2

function approach2(arr){
    let L=0
    for(let r =0;r<arr.length;r++){
        if(arr[r]){
            [arr[L], arr[r] ]= [arr[r], arr[L]]
            L++;
        }
    }
    return arr
}

console.log(approach2(Test));
console.log(approach2(Test2));