/*
Finding Maximum and Minimum Elements in an Array

Using Built-in Methods */

function findmaxmin(){
    const max =Math.max(...arr);
    const min = Math.min(...arr);
    return {max,min}
}
const arr = [3, 5, 7, 2, 8, 4];
console.log(findmaxmin(arr));