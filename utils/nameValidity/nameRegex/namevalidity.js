const containsSpecialCharacters = (inputString) => {
  const regex = /[^a-zA-Z0-9_\-]/;
  return regex.test(inputString);
};
module.exports = containsSpecialCharacters;
