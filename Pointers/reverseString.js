function reverse(s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    let left = s[i];
    let right = s[j];

    s[i] = right;
    s[j] = left;

    i++;
    j--;
  }
  return s;
}

console.log(reverse("hello".split("")));
