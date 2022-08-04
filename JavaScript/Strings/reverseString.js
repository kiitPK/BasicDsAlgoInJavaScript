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

var strNew = "what is your name";
let strNewResult = [];
strNew.split(" ").map((word) => {
  strNewResult.push(word.split("").reverse().join(""));
});

console.log(strNewResult.join(" "));

const fruits = ["banana", "pear", "apple"];
const allfruits = fruits.concat(["mango", "melon", "avocado"]);
console.log(allfruits);

console.log(Date().getTime);

const car = {
  model: "Fiesta",
};
console.log(typeof car.color === "undefined");

const phrase = "I love my dog! Dogs are great";

console.log(phrase.split("dog").join(""));
console.log(parseInt(0100, 10));

console.log("fab".charAt(0).toUpperCase(), "fab");

const items = ["a", "b", "c", "d", "e", "f"];
console.log(items.join("").split("c").join("").split(""));
