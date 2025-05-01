const encode = (strs) => {
  const encode = strs.map((str) => `${str.length}#${str}`).join("");
  return encode;
};

const decode = (s) => {
  const res = [];
  let i = 0;

  while (i < s.length) {
    // Find the position of '#'
    let j = i;
    while (s[j] !== "#") j++;

    // Extract the length
    const length = parseInt(s.slice(i, j), 10);

    // Extract the original string using the length
    const str = s.slice(j + 1, j + 1 + length);
    res.push(str);

    // Move pointer to the next encoded segment
    i = j + 1 + length;
  }

  return res;
};

console.log(encode(["neet", "code", "love", "you"]));
console.log(decode(encode(["neet", "code", "love", "you"])));
