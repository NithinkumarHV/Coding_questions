/**
 * A prime number is a number that is only divisible by 1 and itself.
 * Note: 1.and 0 are not considered prime numbers,
 *
 * @param {number} limit - The upper limit up to which to generate prime numbers.
 * @returns {number[]} An array containing all prime numbers up to the given limit.
 *
 * As 1 and 0 are not considered prime numbers, so they should not be included in the output array.
 *
 * Sample:
 * 1. generatePrimeNumbers(10);
 * Expected output: [2, 3, 5, 7]
 *
 * 2. generatePrimeNumbers(20);
 * Expected output: [2, 3, 5, 7, 11, 13, 17, 19]
 *
 * Type `npm test` in the terminal to test your code once done.
 * Your task is to make sure all the 5 test cases pass.
 *
 */
function checkPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrimeNumbers(limit) {
  // Create an array to store the prime numbers
  const primes = [];

  for (let i = 2; i <= limit; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(generatePrimeNumbers(10));
