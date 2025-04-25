// Take a sorted list with duplicates, 
// modify it in place to have only unique numbers at the start, 
// and return the count of unique numbers.

// Example 1:

//     Starting list: [1, 1, 2]
//     Unique numbers are 1 and 2.
//     Modify the list to put unique numbers at the front: [1, 2, _] (the last spot doesn't matter)
//     Count of unique numbers: 2
//     Return: 2

// Example 2:

//     Starting list: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//     Unique numbers are 0, 1, 2, 3, 4.
//     Modify the list: [0, 1, 2, 3, 4, _, _, _, _, _] (the rest don't matter)
//     Count of unique numbers: 5
//     Return: 5

let list= [1, 1, 2]
function approach(nums){
    let l = 1;
   for (let r = 1; r < nums.length; r++) {
        
        if (nums[r] !== nums[r - 1]) {
            
            nums[l] = nums[r];
        
            l++;
        }
        
    }

    return l;
}
console.log(approach(list));
