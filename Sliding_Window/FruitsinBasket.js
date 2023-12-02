/**

    You are visiting a farm that has a single row of fruit trees arranged from left to right. 
    The trees are represented by an integer array fruits where fruits[i] is 
    the type of fruit the ith tree produces.

    You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
        You only have two baskets, and each basket can only hold a single type of fruit. 
        There is no limit on the amount of fruit each basket can hold.
    
        Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
    
        Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
    
        Given the integer array fruits, return the maximum number of fruits you can pick.

        Example 1:

        Input: fruits = [0,1,2,2]
        Output: 3
        Explanation: We can pick from trees [1,2,2].
        If we had started at the first tree, we would only pick from trees [0,1].

 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let count = new Map();
  let [left, total, res] = [0, 0, 0];

  for (fruit of fruits) {
    count.set(fruit, (count.get(fruit) || 0) + 1);
    total++;

    while (count.size > 2) {
      let f = fruits[left];
      count.set(f, count.get(f) - 1);
      total -= 1;
      left += 1;
      if (!count.get(f)) {
        count.delete(f);
      }
    }
    res = Math.max(res, total);
  }

  return res;
}

console.log(totalFruit([0, 1, 2, 2]));
