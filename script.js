let array = ['java', 'javascript', 'python', 'html', 'css', 'ajsiajeswuwhdwuqduw'];
let result = theGreatestWord(array)
console.log(result)
function theGreatestWord(array) {
    let word = []
    for (let i = 0; i<=array.length-1;i++) {
        word.push(array[i].length)
        // 
   }
let num = word[0];
for ( let x =1; x < word.length; x++) {
    if(word[x]<num) {
        num = word[x]
    }

}
    let results = word.indexOf(num)
    return array[results]
}

    
    

