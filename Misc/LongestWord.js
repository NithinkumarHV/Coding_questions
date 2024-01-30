/*
    Have the function LongestWord(sen) take the sen parameter being passed and return the longest 
    word in the string. If there are two or more words that are the same length,
    return the first word from the string with that length. Ignore punctuation and 
    assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

    i/p: "fun!& time"
    o/p: time

    i/p: "hello world"
    o/p: hello
*/

function LongestWord(str) {
  const regex = /[^a-zA-Z0-9 ]/g;
  // Remove special characters
  const resultString = str.replace(regex, "").split(" ");

  let maxLengthWord = "";

  for (let i = 0; i < resultString.length; i++) {
    // If length of word > length of maxLengthword then update, else continue
    if (resultString[i].length > maxLengthWord.length) {
      maxLengthWord = resultString[i];
    } else continue;
  }
  return maxLengthWord;
}

console.log(LongestWord("hello12^% world123"));
