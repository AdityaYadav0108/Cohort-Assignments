/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let myStr = cleanseString(str);
  let i = 0;
  let j = myStr.length - 1;

  while (i < j) {
    if (!(myStr[i] === myStr[j])) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function cleanseString(str) {
  const regex = /[^a-zA-z]/g;
  return str.replace(regex, "").toLowerCase();
}

module.exports = isPalindrome;
