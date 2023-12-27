/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Time O(N) | Space O(1)
 * @param {number} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [left, right, max] = [0, 1, 0];

  // While right less than length of the array
  while (right < prices.length) {
    // if prices[right] <= prices[left] => there can be no profit
    if (prices[right] <= prices[left]) left = right;

    // compute profit
    const profit = prices[right] - prices[left];
    console.log(profit);

    // compute maxProfit
    max = Math.max(max, profit);

    // Increment right
    right++;
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
