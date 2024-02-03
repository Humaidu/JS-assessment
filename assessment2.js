// JS Assessment 2

// 1. Arrays

//create number array from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Access third element of array
let thirdElement = numbers[2];

//Change value of last element to 0
numbers[9] = 0;

//Add new element to end of array
numbers.push(11);

//Remove the first element from array
numbers.shift();

//find the index of number in the array
let indexOfFive = numbers.indexOf(5);

//check if the array contains 8
let containsEight = numbers.includes(8);

//Reverse the order of elements in array
let reverseOrder = numbers.reverse();

//sort the array in ascending order
let ascendingOrder = numbers.sort((a, b) => a - b);

//create new Array containing only the even numbers from the original array
let evenNumbers = numbers.filter((n) => n % 2 == 0);

// 2. While Loops

// while loop that print 1 to 10
let num = 1;
while (num <= 10) {
  // console.log(num)
  num++;
}

// Loop that sums all numbers in array
const myNumbers = [2, 3, 4, 5, 6, 11, 10, 9];
sum = 0;

while (myNumbers.length > 0) {
  sum += myNumbers.pop();
}
// console.log(sum)

// while loop that finds the largest number
const myNum = [2, 7, 4, 8, 6, 11, 10, 14];
let i = 0;
largestNumber = myNum[0];
while (i < myNum.length) {
  if (myNum[i] > largestNumber) {
    largestNumber = myNum[i];
  }
  i++;
}
console.log(largestNumber)

// a loop that prompts the user for input until they enter a valid email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getUserEmail() {
  let userEmail = prompt("Please enter your email address:");

  while (!isValidEmail(userEmail)) {
    alert("Invalid email address. Please enter a valid email.");
    userEmail = prompt("Please enter your email address:");
  }

  return userEmail;
}

// A loop that stimulates a dice roll until six is rolled
let dice = 0;
let rolls = 0
while(dice !== 6) {
    dice = Math.floor(Math.random() * 6) + 1;
    rolls++

    console.log(`rolls: ${rolls}, dice: ${dice}`)
}

console.log(`It took ${rolls} to get a 6.`)

// 3. ForEach Method

// use for each to print each element in an array
const numbs = [2, 5, 8, 6, 22, 45, 32, 56, 1];
numbs.forEach(n => console.log(n))

//use for each to double each element in an array
numbs.forEach(n => console.log(n * n))

//use for each to create new array containing only the strings from mixed array
mixedArray = [5, 8, 12, "a", "b", "c"];
stringArray = [];
mixedArray.forEach((item) => {
  if (typeof item === "string") {
    stringArray.push(item);
  }
});
// console.log(stringArray)

// Use the forEach method to find the sum of all even numbers in an array.
sum = 0;
numbs.forEach((n) => {
  sum += n;
});

// console.log(sum)

//Use the forEach method to filter an array based on a certain condition.
evenArray = [];
numbs.forEach((n) => {
  if (n % 2 == 0) {
    evenArray.push(n);
  }
});
console.log(evenArray);

// 4. Rest parameters

//Define a function that accepts any number of arguments using rest parameters.

function greet(...names){
    let msg = `Greetings ${names}`;
    return msg;
}

//Use rest parameters to create a function that calculates the average of a list of numbers.

function sumOfNumbers(numbers){
    let sum = 0
    numbers.forEach(n => sum += n)
    return sum
}

function calculateAverage(...numberList){
    let avg = sumOfNumbers(numberList)/numberList.length
    return avg
}

// console.log(calculateAverage(5,6))

//Use rest parameters to create a function that logs all the arguments passed to it.
function logger(...args){
    msg = `logger: ${args}`
    return msg
}

//Use rest parameters to create a function that combines multiple arrays into a single array

function combineArrays(...arrayList){
    return [].concat(...arrayList)
}

//Use rest parameters to create a function that accepts a variable number of objects and merges them into a single object.
function combineObjects(...objectList){
    return Object.assign({},...objectList)
}

// 5. Object literals:

// Create an object literal representing a person with properties for name, age, and address.