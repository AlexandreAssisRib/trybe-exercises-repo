let result = profit(100,200)
console.log(result)
function profit(cost, price) {
    let costInbutTax = (20/100)* cost;
    let profit = price - costInbutTax
    return profit

}