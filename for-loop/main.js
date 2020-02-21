// const brother = {name: "Aaron", age:40, location:"McMinnville"}
// const sister = {name: "Diana", age:38, location: "McMinnville"}
// const mom = {name: "Loraine", age: 63, location: "McMinnvlle"}

// const targetContentElement = document.querySelector(".container")

// const myFamily= []
// myFamily.push(brother)
// myFamily.push(sister)
// myFamily.push(mom)

//for ..of
// Person is age and lives in location
// for (person of myFamily) {
//     targetContentElement.innerHTML += `
//     <div>${person.name} is 
//     ${person.age} 
//     and lives in ${person.location}
//     <div>`
// } 

//loop through the food array and put each item in the picnic basket array
//console log the picnic basket
// const foods = ["peaches", "salad", "pasta", "sandwiches", "iced Tea"]
// const picnicBasket = []

// for (const foodItem of foods) {
//     picnicBasket.push(foodItem);
// }
// console.log(picnicBasket, "final console log")

//Loop through the array, if a number is even console.log "even steven"
//if a number is odd, console log "odd todd"
// const numbers = [2,5,6,19,6,339,284,1,722]

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(number,     "even steven")
//     } else {
//         console.log(number, "odd todd", )
//     }
// }


const steve = {
    name: "Steve",
    phrase: "Living the dream!",
    isSeniorDev: true
}
const mo = {
    name: "Mo",
    phrase: "Are we defining the function? Or are we invoking the function?",
    isSeniorDev: false
}
const madi = {
    name: "Madi",
    phrase: "💣 BOOM!",
    isSeniorDev: false
}
// 1. Add each intstructor into an array called 'instructorArray'
const instructorArray = [];

instructorArray.push(steve)
instructorArray.push(mo);
instructorArray.push(madi)

/*instructor's name to the console. 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) */

// for (const instructor of instructorArray) {
//     console.log(instructor.name);
// }

// 3. Now check to see IF there is a senior dev in the array, if there is, print that 
//instructor's phrase. (HINT: There is a property (or key value pair) on the instructor for whether or not they're a senior dev! 👀)

// for (const instructor of instructorArray) {
//     if (!instructor.isSeniorDev) {
//         console.log(instructor.phrase)
//     } else {
//         console.log(instructor.phrase);
//     }
// }

/*
    Let's make a sandwich!
*/
// 1. Define a function called 'makeSandwich'.

const makeSandwitch = (cheese, meat, bread) => {
    console.log(`I would like a ${cheese} and ${meat} sandwitch on ${bread}!`)
}
/*
    a. The function should take a cheese, a meat, and a bread as its arguments.
    b. The function will log to the console our finished sandwich: "I would like a __ and __ sandwich on __ bread!"
*/
// 2. Now invoke the function, and pass in the 3 ingredients as the parameters! See how many sandwiches you can make!
makeSandwitch("american", "ham", "wheat")