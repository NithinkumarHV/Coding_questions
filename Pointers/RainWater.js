/*
    https://leetcode.com/problems/trapping-rain-water/description/

    Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

    Example 1:
    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
    
    Example 2:
    Input: height = [4,2,0,3,2,5]
    Output: 9

*/

// Formula = ( Math.min(leftMax, rightMax) - height(i) )

function rainWater(height) {
  const length = height.length;
  const maxLeft = [];
  const maxRight = [];
  const minLeftRight = [];

  let current = 0;

  for (let i = 0; i < length; i++) {
    maxLeft.push(current);
    current = Math.max(current, height[i]);
  }

  current = 0;

  for (let i = length - 1; i >= 0; i--) {
    maxRight.push(current);
    current = Math.max(current, height[i]);
  }

  maxRight.reverse(); // because the elements were added reverse.

  for (let i = 0; i < length; i++) {
    const minofLeftRight = Math.min(maxLeft[i], maxRight[i]);
    minLeftRight.push(minofLeftRight);
  }

  let water = 0;
  for (let i = 0; i < length; i++) {
    if (minLeftRight[i] - height[i] > 0) {
      water += minLeftRight[i] - height[i];
    }
  }

  return water;
}

console.log(rainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
