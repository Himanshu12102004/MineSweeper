const englishBadWords = require("./badWords(en)");
const hindiBadWords = require("./badWords(hin)");

const badWordsChecker = (inputString) => {
  const englishInput = inputString.toLowerCase();

  // Construct regular expression with word boundaries
  const wordBoundaryRegExp = new RegExp(
    `\\b(${englishBadWords.join("|")})\\b`,
    "i"
  );

  if (wordBoundaryRegExp.test(englishInput)) {
    console.log("english");
    return true;
  }

  // Construct regular expression for Hindi words with word boundaries
  const hindiWordBoundaryRegExp = new RegExp(
    `\\b(${hindiBadWords.join("|")})\\b`,
    "i"
  );

  if (hindiWordBoundaryRegExp.test(englishInput)) {
    console.log("hindi");
    return true;
  }

  return false;
};

module.exports = badWordsChecker;
