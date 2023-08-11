const englishBadWords = require("./badWords(en)");
const hindiBadWords = require("./badWords(hin)");
const badWordsChecker = (inputString) => {
  const englishInput = inputString.toLowerCase();

  for (const word of englishBadWords) {
    if (englishInput.includes(word)) {
      console.log("english");
      return true;
    }
  }

  for (const word of hindiBadWords) {
    if (englishInput.includes(word)) {
      console.log("hindi");
      return true;
    }
  }

  return false;
};
module.exports = badWordsChecker;
