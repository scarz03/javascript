const score = new Number(200)
console.log(score)
console.log(score.toExponential(2))
console.log(score.toString().length)  // Now we can use all the string functions with the number


let bal = 1213.9965
console.log(bal.toFixed(1))
console.log(bal.toPrecision(5))

let amt = 1000000
console.log(amt.toLocaleString('en-IN'))

// xxxxxxxxxxxxxx Maths xxxxxxxxxxxxxxx 

console.log(Math)
console.log(Math.abs(-43))
console.log(Math.round(39.5))
console.log(Math.ceil(44.1))
console.log(Math.floor(4.9))
console.log(Math.min(3.4, 5.6, 8, 1))
console.log(Math.max(3.4, 5.6, 8, 1))

// An imp function

console.log(Math.floor((Math.random() *10) + 1 ))

// Example : you need a num between 1 to 10 randomly

const min = 1
const max = 11

console.log(Math.floor(Math.random() * (max - min + 1) + min))

