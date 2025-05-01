function Armstrong(n){
    let og=n
    let sum=0
    while(n>0){
       let ld= n%10
        sum= sum+(ld*ld*ld)
        n =Math.floor(n/10)
    }
    if(sum ==og){
        return "its a Armstrong Number "+ sum 
    }else{
        return "ist not a Armstrong number"
    }

}
console.log(Armstrong(153));
