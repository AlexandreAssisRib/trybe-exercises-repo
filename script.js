let numbers = [5, 9, 3, 19, 70, 8, 2, 35, 27];

let result = AverageArray(numbers)
console.log(result)
function AverageArray (arrayOfnums) {
    sum = 0;
    for (let i =0; i < numbers.length; i++) {
       sum = sum + (arrayOfnums[i]);
    
    }
    let average = sum/numbers.length;
    let resul = average>20 ? 'valor maior que 20': 'valor menor que 20';
    return resul + ' :' + average
    
}
