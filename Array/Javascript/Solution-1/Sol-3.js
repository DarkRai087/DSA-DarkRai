// Using forEach() function
// time-o(n) Space= 0(1)

// slightly less efficient than a simple for loop in terms of execution due to function call overhead

function sumArr(arr){
    let sum =0;
    arr.forEach(num => {
        sum +=num
    });
    return sum;

}
const number = [1,2,3,4,5,6];
console.log(sumArr(number));