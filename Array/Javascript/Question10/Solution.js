let arr10 = [1, 2, 3, 4, 5];
let isSorted = true;
for (let i = 1; i < arr10.length; i++) {
  if (arr10[i] < arr10[i - 1]) {
    isSorted = false;
    break;
  }
}
console.log("Is Array Sorted:", isSorted);