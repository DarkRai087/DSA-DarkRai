const a =[1,2,3]
let k= a.length;


for(let i =0;i<k;i++){
   a[k+i]=a[i]
}
for(let i=0;i<a.length;i++){
    console.log(a[i]);
    
}
// Time Complexity: O(k + n)
// Space Complexity: O(k)