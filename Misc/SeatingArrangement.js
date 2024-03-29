/**
 * Have the function SeatingStudents(noOfDesks, arrOccupiedDesks) read the input arguments where noOfDesks represents the number of desks in a classroom, and the argument occupiedDesks, will be a sorted array of the desks that are already occupied.
 *
 * All of the desks will be arranged in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc.
 *
 * Your program should return the number of ways 2 students can be seated next to each other. This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student. Desks 1,3 are adjacent but 2,3 are not adjacent.
 *
 * Testcase 1:
 * Input: 12, [2, 6, 7, 11]
 * Output: 6
 *
 * Explanation:
 * Seating arrangement picture.
 * https://i.imgur.com/rvP5cjj.jpeg
 *
 * The possible adjacent arrangements from the above picture are
 * - 1,3
 * - 3,4
 * - 3,5
 * - 8,10
 * - 9,10
 * - 10,12
 * Hence the answer 6.
 */

function seatingArrangements(noOfDesks, occupiedDesks) {
  let count = 0;

  const isOccupied = (j) => occupiedDesks.indexOf(j) !== -1;
  const isInRange = (num) => num <= noOfDesks;

  for (let i = 1; i < noOfDesks - 1; i++) {
    if (isOccupied(i)) continue;

    // Odd and i+1 no occupied - count + 1
    if (i % 2 === 1 && !isOccupied(i + 1)) count++;

    // Odd or Even - i+2 is in range and not occupied - count + 1
    if (isInRange(i + 2) && !isOccupied(i + 2)) count++;
  }
  return count;
}

console.log(seatingArrangements(12, [2, 6, 7, 11]));
