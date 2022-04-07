let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

sumArray(numbers)

function sumArray(arrayOfnums) {
    sum = 0;
    for (let i =0; i < numbers.length; i++) {
       sum = sum + (arrayOfnums[i])
    }
console.log(sum)
}