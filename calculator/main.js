// const adding = (x, y) => {
//     return x + y
// }

// let sum1 = adding(1, 2)
// console.log(sum1)

// sum1 = adding(2, 3)
// console.log(sum1)

// sum1 = adding (4, 8)
// console.log(sum1)

// const substract = (x, y) => x - y

// let result = substract (100,68)
// console.log(result)

const nickInformation = {
    name: "Nick",
    age: 30,
    hasPets: false,
    favoriteFoods: ["Chicken", "Rice", "Indian Food"]   
}

nickInformation.corhortName = 39;

console.log(nickInformation.corhortName)

for(const food of nickInformation.favoriteFoods) {
    if(food === "Chicken") {
        console.log(`${food} is my favote food`)
    } else {
        console.log(food)
    }
}
