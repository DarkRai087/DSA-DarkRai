// Check if a string is a palindrome.

let name = "ppp"

let reverse= function(n){
   let a=  n.split('').reverse().join("")
    if (n === a){
        return ("its a palindrome")
    }else{
           return ("not a palindrome")
    }
     
}
console.log(reverse(name));
