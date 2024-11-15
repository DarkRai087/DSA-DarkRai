//Finding Maximum and Minimum Elements in an Array
// 1 Approach Simple Traversal

function findmaxmin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 1;i<arr.lenght; i++){
        if (arr[i]>max){
            max =arr[i]
        }
        if (arr[i]<min){
            min=arr[i]
        }


    }
    return {max,min}
}

const arr = [3, 5, 7, 2, 8, 4]
console.log(findmaxmin(arr));

/*
Time Complexity:
O(n) where n is the length of the array.

Space Complexity:
O(1) since no extra space is used.

*/