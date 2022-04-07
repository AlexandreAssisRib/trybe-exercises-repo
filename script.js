let result = theNumIsEven(12,15,11)
console.log(result)

function theNumIsEven(paramsA, paramsB,paramsC) {
if ( paramsA%2 == 0 || paramsB%2 == 0 || paramsC%2 == 0) {
    return true;
} else {
    return false;
}
    
}