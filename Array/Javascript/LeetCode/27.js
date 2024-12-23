function r(nums, val){
    let i = 0;
for(let i = 0;i<nums.length;i++){
    if (nums[i]!==val){
        nums[i]=nums[i];
        i++

    }
}
return i;
}