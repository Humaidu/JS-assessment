// partyAge = 21
// userAge = 20
// userAge = window.prompt("Enter your age: ")

// if(userAge >= partyAge){
//     console.log("You can go to the party")
// }else{
//     console.log("You can not go to the party")
// }

//Object literals

// let phoneObj = {
//     name: "Iphone",
//     type: "Apple",
//     year: 2020
// }

// let { name:n, type:t} = phoneObj
// console.log(n)
// console.log(t)

// const affirmativeData = [
//     "Keep working hard",
//     "You are doing a good job",
//     "Your opportunity will come",
//     "Fall and rise again",
//     "Opportunity comes but once",
//     "You are going to have a nice day",
//     "Your day is blessed"
// ]

// function affirmativeFunc(data){
//     let randomIndex = Math.floor(Math.random() * data.length)
//     let affirmativeMsg = data[randomIndex]
//     return affirmativeMsg
// }

// console.log(affirmativeFunc(affirmativeData))

let number1 = [1,2,3,4,5,6,7,8,9,10]
let number2 = [1,2,3,4,5,6,7,8,9,10]

const students = ["Humaidu", "Ali", "Yasir", "kofu"]

const studentData = [
    {
        name: "Humaidu",
        age: 34,
        score: 70
    },

    {
        name: "Mohammed",
        age: 39,
        score: 80
    },

    {
        name: "Hashim",
        age: 19,
        score: 95
    },
    {
        name: "Waalid",
        age: 27,
        score: 60
    },
]


//for of
// for(let num1 of number1) {
//     console.log(`MULTIPLICATION TABLE OF ${num1}`)
//     for(let num2 of number2) {
//         multiply = `${num1} x ${num2} = ${num1 * num2}`
//         console.log(multiply)
//     }
// }

//forEach
// students.forEach(function(student){
//     console.log(student)
// })

// studentData.forEach(function(data){
//     console.log(data.name, data.age)
// })

//filter
// std = studentData.filter(function(student){
//     return student.score > 75
// })

// console.log(std)