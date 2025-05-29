let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

let newDate = new Date(2025, 0, 23, 5, 3) //(YYYY, MM, DD, H, M)
// console.log(newDate)

// let newDate2 = new Date("2-5-2025")
// console.log(newDate2.toLocaleString())
// console.log(newDate2.toLocaleDateString())

// let newDate3 = new Date()
// console.log(newDate3.getDate())
// console.log(newDate3.getMonth() + 1)

// newDate3.toLocaleString('default', {
//     weekday: "narrow",
// })
// console.log(newDate3)

console.log(newDate.getTime())
console.log(newDate.getTime() / 1000)  // To get time in seconds

