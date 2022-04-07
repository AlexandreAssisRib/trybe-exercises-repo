let result = theNumIsOdd(12,13,18)
console.log(result)

function theNumIsOdd(paramsA, paramsB,paramsC) {
if ( paramsA%2 !== 0 || paramsB%2 !== 0 || paramsC%2 !== 0) {
    return true;
} else {
    return false;
}
    
}