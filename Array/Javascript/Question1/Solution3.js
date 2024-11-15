function findMaxMin(arr) {
    if (arr.length === 0) return { max: null, min: null };
    
    const sortedArr = [...arr].sort((a, b) => a - b);
    return { max: sortedArr[sortedArr.length - 1], min: sortedArr[0] };
}

const arr = [3, 5, 7, 2, 8, 4];
console.log(findMaxMin(arr));  
