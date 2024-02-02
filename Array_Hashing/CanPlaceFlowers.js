/*
    https://leetcode.com/problems/can-place-flowers/description/

    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

    Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true
    
    Example 2:
    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false
*/

function canPlaceFlowers(fb, n) {
  if (n === 0) return true;

  for (let i = 0; i < fb.length; i++) {
    if (fb[i] === 0) {
      if (fb[i - 1] !== 1 && fb[i + 1] !== 1) {
        n--;
        i++;
      }
    } else {
      i++;
    }
    if (n === 0) return true;
  }
  return false;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
