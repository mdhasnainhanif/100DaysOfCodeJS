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
  for (let j = 1 + i; j < unSortArray.length; j++) {
    if (unSortArray[i] > unSortArray[j]) {
      temp = unSortArray[i];
      unSortArray[i] = unSortArray[j]
      unSortArray[j] = temp
    }
  }
}
document.write(`Question 8: Sorted array is [${unSortArray}]` + "<br>");


// 15. Question: Determine if a year is a leap year or not.

// var year = 2024

// if (year % 4 === 0) {
//   console.log('Yes ' + year + ` is a leap year`);
// } else {
//   console.log('No ' + `${year} is Not leap year`);
// }


// 13. Question: Check if a number is even or odd and return a corresponding message.


// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is Even Number");
//   } else {
//     console.log(i + " is Odd Number");
//   }
// }





// New Assignment


// 1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }



let result1;
let score = 10;
result1 = score >= 80 ? result1 = "pass" : result1 = "fail"
console.log(result1);



// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?


var newObj = {
  name: "Hasnain",
  id: 21,
  courses: {
    course1: "Frontend Development",
    course2: "Backend Development",
  }
}


console.log(newObj?.name, newObj?.courses?.course2);


// 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.


// var newArr1 = [12,23,34,45,56,67,78,89]


// for(let i of newArr1){
//   console.log(i, "this is for of loop");
// }

// for(let i in newArr1){
//   console.log(i, "this is for in loop", newArr1[i], "this is for in loop");
// }


// 4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const reduceFunc = (num1, num2) => {
  return num1 + num2 / arrNumbers.length
}

let calculateAverage = arrNumbers.reduce(reduceFunc)
console.log(calculateAverage);



// 5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.


function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// Create a closure by calling outerFunction and assigning its result to a variable
let closure = outerFunction();

// Call the innerFunction, which still has access to outerVariable
closure(); // Outputs: I am from the outer function
  



// 6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.



let std = {
  name: "Hasnain",
  age: 21,
  grades: [20,40,30,20,40,50,70],

  calculateAverageFunc: function(){

    if(this.grades.length === 0){
      return 0 // To avoid division by zero if the grades array is empty
    }

    const sum = this.grades.reduce((num1, num2) => num1 + num2)
    let average = sum / this.grades.length

    return average

  }

}

console.log(std.calculateAverageFunc());


// 7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// let obj3 = {
//   name: "hasnain",
//   id: 4,
//   role: "Frontend"
// }
// let obj4 = Object.assign("", obj3);
// console.log(obj4.name = "Khan");
// console.log(obj3, "obj3");



// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.


// let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let value1;

// for(let i of arr1){
//   console.log(i % 2 === 0 ? value1 = `${i} is Even Number`: `${i} is Odd Number`);
// }


// 9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?






// 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.




// 11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.


// let obj2 = {
//   name: "Hasnain",
//   id: 3,
//   role: "Frontend Developer"
// }


// for(let i in obj2){
//   console.log(i, obj2[i]);
// }


// 12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.



// 15. Question: Determine if a year is a leap year or not.

var year = 2024

if (year % 4 === 0) {
  console.log('Yes' + year + ` is a leap year`);
} else {
  console.log('No' + `${year} is Not leap year`);
}



// 1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }


let marks = 70;
marks >= 80 ? marks = "pass" : marks = "fail" 
console.log(marks);