// 11. Check if a Number is Prime
// Description: Check if a given number is prime.


function prime(n){
    if (n <= 1) return false;
   
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n%i===0) return false
    }
    return true

}
// Test Cases
console.log("Test Case 1:", prime(7)); // Output: true
console.log("Test Case 2:", prime(4));

