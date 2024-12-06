let arr5 = [-1, 2, -3, 4, 5, -6];

let negPointer = 0;
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] < 0) {
    [arr5[i], arr5[negPointer]] = [arr5[negPointer], arr5[i]];
    negPointer++;
  }
}
console.log("Array with Negatives on One Side:", arr5); 