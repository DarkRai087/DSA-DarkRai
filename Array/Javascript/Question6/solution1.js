let arr6a = [1, 2, 3, 4, 5];
let arr6b = [2, 3, 5, 7, 9];

let union = [...new Set([...arr6a, ...arr6b])];

let intersection = arr6a.filter(value => arr6b.includes(value));
console.log("Union:", union, "Intersection:", intersection);