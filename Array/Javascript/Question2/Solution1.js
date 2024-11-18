let arr2 = [1, 2, 3, 4, 5];
// Swap elements in place using two pointers
let left = 0, right = arr2.length - 1;
while (left < right) {
  [arr2[left], arr2[right]] = [arr2[right], arr2[left]];
  left++;
  right--;
}
console.log("Reversed Array:", arr2);