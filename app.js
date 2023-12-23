// 1. Question: Reverse a string without using the built-in reverse() method.

let str = "reverse"
for (let i = str.length - 1; i >= 0; i--) {
  document.write(str[i]);
}

document.write('<br/>')

// 2. Question: Count the number of vowels in a given string.

var vowels = ["a", "e", "i", "o", "u"];
let result = [];
let vowelSentence = "Hasnain"


for (let character of [...vowelSentence]) {
  if (vowels.includes(character)) {
    result.push(character)
  }
}
document.write("In " + vowelSentence + " These are Vowels " + result)

document.write('<br/>')

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

var sentence = "this is a sentence";
var arrSentence = sentence.split(" ");
var uppSentence = "";

for (let i of arrSentence) {
  uppSentence += i.slice(0, 1).toLocaleUpperCase() + i.slice(1) + " ";
}
document.write(uppSentence);


// 4. Question: Check if a string is a palindrome.

var palindrome = "civic"

var revertPalindrome = palindrome.split("").reverse().join("")
if (palindrome == revertPalindrome) {
  document.write(revertPalindrome + " word is palindrome")
} else {
  document.write(palindrome + " word is tot palindrome")
}


// 5. Question: Find the sum of all positive numbers in an array.


let sum = [1, -5, 6, 3, -6, 37, -2]
let positiveInt = 0;
for (let i = 0; i < sum.length; i++) {
  if (sum[i] > 0) {
    positiveInt += sum[i]
  }
}
document.write("These are positive integers ", positiveInt + "<br/>");


// 6. Question: Find the index of the first occurrence of a specific element in an array.

let myArray = [1, 5, 77, 3, 6, 37, 2]
let num = 2;
let index;

for (index = 0; index < myArray.length; index++) {
  if (myArray[index] == num) {
    console.log(index);
  }
}

// 7. Question: Remove all duplicates from an array without built-in methods.

let arrray = [5, 3, 2, 7, 5, 4, 3, 5];


function newArray(arr) {
  let lastOccur;
  let k = 0;
  let updatedArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        lastOccur = j;
      };
    };
    if (i == lastOccur) {
      updatedArray[k] = arr[i];
      k++;
    };
  };
  return updatedArray;
}
document.write(`Question 7: New array is [${newArray(arrray)}]` + "<br>");

// Question 8:

let unSortArray = [5, 3, 2, 7, 1, 4, 8, 9];
let temp;

for (let i = 0; i < unSortArray.length; i++) {
  for (let j = 1 + i; j < array.length; j++) {
    if (unSortArray[i] > unSortArray[j]) {
      temp = unSortArray[i];
      unSortArray[i] = unSortArray[j]
      unSortArray[j] = temp
    }
  }
}
document.write(`Question 8: Sorted array is [${unSortArray}]` + "<br>");


// 15. Question: Determine if a year is a leap year or not.

var year = +prompt("Year")

if (year % 4 === 0) {
  console.log('Yes' + year + ` is a leap year`);
} else {
  console.log('No' + `${year} is Not leap year`);
}


// 13. Question: Check if a number is even or odd and return a corresponding message.


for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is Even Number");
  } else {
    console.log(i + " is Odd Number");
  }
}



