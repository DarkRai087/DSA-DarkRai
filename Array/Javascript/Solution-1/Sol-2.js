// 2 best Soltion . Using reduce()

// time-o(n) Space= 0(1)
//Using reduce()

function sumArr(arr){
    return arr.reduce((acc,num)=> acc + num,0)
}
const number = [1,2,3,4,5,6];
console.log(sumArr(number));