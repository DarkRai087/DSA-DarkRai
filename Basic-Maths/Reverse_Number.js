// Problem Statement: Given an integer N return the reverse of the given number.

// Example 1:
// Input:N = 12345

// Output:54321

// Explanation: The reverse of 12345 is 54321.
                        
// Example 2:
// Input:N = 7789                

// Output: 9877

// Explanation: The reverse of number 7789 is 9877.



function reverse(n){
    let rev= 0;
    while(n>0){
      
let ld= n%10
       n=Math.floor(n/10)
       rev= rev*10+ld
       


    }
     return rev
}   
let n = 7832         
console.log(reverse(77));
