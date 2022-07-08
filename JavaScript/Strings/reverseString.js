function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("abc"));

function reverseString2(string) {
  let stringArr = string.split("");
  let result = "";
  for (let i = stringArr.length - 1; i >= 0; i--) {
    result = result.concat(stringArr[i]);
  }
  console.log(result);
}

console.log(reverseString2("abcd"));

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseEachWord + ":::" + reverseEntireSentence);
