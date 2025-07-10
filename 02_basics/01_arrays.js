// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[2])
// console.log(myArr.toString())

// myArr.push(6)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(8)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// const myArr2 = new Array(0, 1, 2, 3, 4)
// console.log(myArr2)

// const myn1 = (myArr2.slice(1, 3))
// console.log(myArr2)

// const myn2 = (myArr2.splice(1, 3))
// console.log(myArr2)                     // As we can see splice removes the elements from the original array


// MERGE 2 ARRAYS

// const marvel = ["spiderman", "thor", "ironnman"]
// const dc = ["superman", 'batman', 'aquaman']

// const multiverse = marvel.concat(dc)
// console.log(multiverse)

// // FOR MORE THAN 2,

// const anime = ['itachi', 'sasuke', 'naruto']

// const allChars = [...anime, ...dc, ...marvel]
// console.log(allChars)


let badArr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 0, [1, 2, [3, 4]]]]
let goodArr = badArr.flat(Infinity)
console.log(goodArr)

console.log(Array.isArray("affan")) //checks if the given input is an array
console.log(Array.from("affan")) // makes the input array (only of convertible)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))