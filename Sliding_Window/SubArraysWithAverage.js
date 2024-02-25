/**
 
https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

    Given an array of integers arr and two integers k and threshold, 
    return the number of sub-arrays of size k and average greater than or equal to threshold.

    Example 1:

    Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
    Output: 3
    Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

    Example 2:

    Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
    Output: 6
    Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

    ALGORITHM:

    1. set result=0, windowSum = 0
    2. iterate from i=0 to i < k
       windowSum = windowSum + arr[i]
    3. check windowSum/k is greater than threshold - if yes increment result
    4. iterate from i=k to i < array length
       Remove leftmost element of the window(i-k)th and add the current element(i)
       windowSum = windowSum - array[i-k] + arr[i]
       check windowSum/k is greater than threshold - if yes increment result
    5. return result;

 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
  let [result, windowSum] = [0, 0];

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  if (windowSum / k >= threshold) result++;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    if (windowSum / k >= threshold) result++;
  }
  return result;
}

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
