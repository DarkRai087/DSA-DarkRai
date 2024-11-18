let arr8 = [4, 3, 2, 7, 8, 2, 3, 1];
let duplicates = [];
let seen = new Set();
arr8.forEach(num => {
  if (seen.has(num)) duplicates.push(num);
  else seen.add(num);
});
console.log("Duplicates:", duplicates);
