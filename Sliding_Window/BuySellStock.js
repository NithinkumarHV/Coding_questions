/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Time O(N) | Space O(1)

  You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a 
  different day in the future to sell that stock.

  Return the maximum profit you can achieve from this transaction. 
  If you cannot achieve any profit, return 0.
 
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

console.log("Max profit", maxProfit([7, 1, 5, 3, 6, 4]));
