const nums = [3, 5, 15, 7, 5];
let n,
  i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
  console.log(`Number less than 10 found: ${n}.`);
}
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length - i - 1} numbers remain.`);
