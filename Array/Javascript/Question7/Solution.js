let arr7 = [1, 2, 3, 4, 5];
let steps = 2;
// Normalize steps
steps %= arr7.length;
// Reverse parts of the array
arr7.reverse();
let part1 = arr7.slice(0, steps).reverse();
let part2 = arr7.slice(steps).reverse();
let rotatedArr7 = [...part1, ...part2];
console.log("Rotated Array:", rotatedArr7);