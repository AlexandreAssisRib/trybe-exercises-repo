let word = 'tryber'


let result = wordInverter(word)
function wordInverter(word) {
    let wordinverted = " "
    for( let i = word.length-1; i>=0;i--) {
        wordinverted += word[i];
       
    }
    console.log(wordinverted)
}