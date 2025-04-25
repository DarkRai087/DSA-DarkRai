function square(arr){
    const root= arr.map(e=>{
        return e*e
    })
    return root.sort((a,b)=>{
        return a-b
    })
}
let nums = [-4,-1,0,3,10]
console.log(square(nums));
