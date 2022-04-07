let numbers = [5, 9, 3, 19, 70, 8, 2, 35, 27];

let maxInArray = numbers.reduce((el,total) => {return Math.max(el,total) })
console.log(maxInArray)