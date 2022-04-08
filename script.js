let numbers = [2, 6, 3, 19, 70];
let result = Odd(numbers)
console.log(result)

function Odd(array) {
    let numsOdds =0 ;
    for(let i = 0; i< numbers.length; i++) {
        if ( array[i]%2 !== 0) {
       numsOdds++ ;
       
       
         } else {
            i++;
        }
      
}
return numsOdds

}   
