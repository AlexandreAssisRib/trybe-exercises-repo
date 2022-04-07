
let input = 20;
let result = parseInt(input)
console.log(noteConverter(result))
function noteConverter(element) {
    if ( element >= 90) {
        return("A")
    }
    else if ( element>=80 && element<90) {
        return ("B")
    }
    else if( element>=70 && element<80) {
        return ("C")
    }
    else if ( element>=60 && element<70) {
        return ("D")
    }
    else if ( element >= 50 && element<60) {
        return("E")
    }
    else if( element < 50 && element>0) {
        return("F")
    } else {
        return("error!")
    }
}