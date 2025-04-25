function bestTime(arr){
let l = 0
let r= 1
let maxpf=0
while(r<arr.length){
    if(arr[l]<arr[r]){
        let pf= arr[r]-arr[l]
        maxpf= Math.max(maxpf,pf)
    }else {
        l=r
    }
    r++
}
return maxpf
}
let prices = [7,1,5,3,6,4]
console.log(bestTime(prices));
