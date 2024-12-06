//Find the sum of all elements in an array
// best Solution with time-o(n) and space-o(1)

function sumArr(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum +arr[i];// sum +=arr[i]
    }
    return sum;
}
const number = [1,2,3,4,5,6];
console.log(sumArr(number));
