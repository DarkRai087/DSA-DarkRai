// Find the factorial of a number.


let factorial= function(num){
    let res= 1 
    for(let i = 1;i<=num;i++){
        res*=i
    }
    return Math.floor((res)/2)
}
console.log(factorial(120));
