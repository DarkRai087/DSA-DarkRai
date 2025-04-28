function palindrome(n)
{
    let og=n
    let rev =0
 while(n>0){
    ld=n%10
    n= Math.floor(n/10)
    rev= rev*10+ld
 }   
if(og==rev){
    return "it is a palindrome"
    
}else
{
    return "its not a palindrome"
}
}
let a =44;
console.log(palindrome(a));
