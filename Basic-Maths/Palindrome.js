let palindrome = (n)=>{
let revNum= 0
let dup= n;
while(n>0){
    let lastDigit=n%10
    revNum= (revNum*10)+lastDigit
    n=Math.floor(n/10)
    if(dup==revNum){
        return true
    }else{
        return false
    }
}
}
let num= 444
function p(num){
    if(palindrome(num)){
        console.log(num+" is a palindrome");
        
    }else {
        console.log(num+" is not a palindrome");
        
    }
    
}
p(num)