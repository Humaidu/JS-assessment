//if-else Question

//1. Age Eligibility Checker

let age = Number(prompt("Enter Your Age: "))

if(age > 0 && age >= 18){
    console.log("You are eligible to vote")
}else{
    console.log("You are not eligible to vote")
}

//2. Even or OddNumber Identifier

let num = 5

if(num % 2 == 0){
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}

// 3. Vowel or Consonant Classifier

let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
let input = 'a'

if(vowel.includes(input)){
    console.log(`${input} is a Vowel`)
}else{
    console.log(`${input} is a Consonant`)
}

// 4. Largest Number Finder:Compare two numbers and return the larger one.

num1 = 45
num2 = 23

if (num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}else{
    console.log(`${num2} is greater than ${num1}`)
}

// 5. Simple Calculator

function calculator(num1, num2, operator){
    if(operator === "+"){
        result = `${num1} + ${num2} = ${num1 + num2}`

    }else if(operator === "-"){
        result = `${num1} - ${num2} = ${num1 - num2}`

    }else if(operator === "*"){
        result = `${num1} x ${num2} = ${num1 * num2}`

    }else if(operator === "/"){
        result = `${num1} / ${num2} = ${num1 / num2}`

    }else{
        result = "Operator is not supported"
    }

    return result
}

calc = calculator(7,2,"+")
console.log(calc)


// Switch Statement:

// 1. Day of the Week Printer
let day = 2;
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Not a Day of the Week")
        break
}

// 2. Grade Evaluator

let score = 78;
switch(true){
    case (score >=80 && score <= 100):
        console.log("Grade A")
        break
    case (score >=75 && score <= 79):
        console.log("Grade B")
        break
    case (score >=65 && score <= 74):
        console.log("Grade C")
        break
    case (score >=50 && score <= 64):
        console.log("Grade D")
        break
    case (score >=0 && score <= 49):
        console.log("Grade F")
        break
    default:
        console.log("Invalid Score")
        break
}

// 3. Rock-Paper-Scissors Game
