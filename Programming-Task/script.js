/*1. Create a function NextLetter which takes a string parameter and modifies it using
the following algorithm: Replace every letter in the string with the letter next but
one in the alphabet (c becomes e, z becomes b, A becomes C). Ignore numbers
and symbols. Then capitalize every vowel in this new string (a, e, i, o, u) and
finally return this modified string. The string will not be empty and not include
spaces.
Examples

Input Output

£7eBm £7gDO //mBe7£0 //£7gDO
Znb0y Bpd0A*/ //Bpd0A;

console.log("NextLetter");

function NextLetter(str) {
  let temp = "";
  let currentChar;
  let format = `/£^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;`;
  let vowel = "aeiou";
  let lowerLetter = "abcdefghijklmnopqrstuvwzyzab";
  let UpperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZAB";

  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];
    checkNumber = /[0-9]/.test(currentChar);
    checkSymbol = format.includes(currentChar);
    checkLowerLetter = /[a-z]/.test(currentChar);
    checkUpperLetter = /[A-Z]/.test(currentChar);

    if (checkNumber) {
      currentChar = str[i];
    } else if (checkSymbol) {
      currentChar = str[i];
    } else if (checkLowerLetter) {
      let findPosition = lowerLetter.indexOf(currentChar);
      currentChar = lowerLetter[findPosition + 2];
      checkVowel = vowel.includes(currentChar);
      if (checkVowel) {
        currentChar = currentChar.toUpperCase();
      }
    } else if (checkUpperLetter) {
      let findPosition = UpperLetter.indexOf(currentChar);

      currentChar = UpperLetter[findPosition + 2];
    }
    temp = temp + currentChar;
  }

  return temp;
}

const callNext = NextLetter("£7eBm");
console.log("Result of given input : £7eBm ::: output :", callNext);

const callNext1 = NextLetter("Znb0y");
console.log("Result of given input : Znb0y ::: output :", callNext1);

/*2. Create a function StarredLetters which takes a string and determine if it satisfies
our requirements by returning either “true” or “false”. For the string to be true
each letter must be surrounded by a * symbol. The string will not be empty and
will have at least one letter.
Examples

Input Output

*a*%=3=* true
%*3*b%3 false*/

console.log("StarredLetters");

function StarredLetters(str) {
  if (str == "") {
    return false;
  }

  let currentChar;
  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];

    checkLetter = /[a-zA-Z]/.test(currentChar);

    if (checkLetter) {
      let findPosition = str.indexOf(currentChar);

      if (str[findPosition - 1] === "*" && str[findPosition + 1] === "*") {
        return true;
      } else {
        return false;
      }
    }
  }
}
const callStar = StarredLetters("*a*%=3=*");
console.log("Result of input : *a*%=3=* ::: is output : ", callStar);

const callStar1 = StarredLetters("%*3*b%3");
console.log("Result of input : %*3*b%3 ::: is output : ", callStar1);
