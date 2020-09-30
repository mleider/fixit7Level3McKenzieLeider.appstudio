
// creates the function

function Calculate(num1, num2) {
let sum = num1 + num2 
return sum
}

// ask user for numbers

let x = parseInt(prompt("Pick a number"))
let y = parseInt(prompt("Pick a number"))


let summedNumbers = Calculate(x, y) 

console.log(`The sum of ${x} and ${y} is ${summedNumbers}`)

