// let firstPrime = null;
// for (let n of bigArrayOfNumbers) {
//   if (isPrime(n) && firstPrime === null) firstPrime = n;
// }

// let firstPrime = null;
// for (let n of bigArrayOfNumbers) {
//   if (isPrime(n)) {
//     firstPrime = n;
//     break;
//   }
// }

// let i = 0;
// for (; i < bigArrayOfNumbers.length; i++) {
//   if (isPrime(bigArrayOfNumbers[i])) break;
// }
// if (i === bigArrayOfNumbers.length) console.log("No prime numbers!");
// else console.log(`First prime number found at position ${i}`);

for (let i = bigArrayOfNumbers.length - 1; i >= 0; i--) {
  if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
