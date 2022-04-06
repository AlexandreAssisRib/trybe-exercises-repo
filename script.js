
let pieceIn = "hOrse";
let piece = pieceIn.toLowerCase()
console.log(piece)
switch(piece) {
    case 'pawn': 
    console.log("only front and a step for next")
    break;
    case 'king':
    console.log("this can move to any square")
    break;
    case 'quenn':
        console.log("the queen can move to any square like a king,unlike the king, the queen can move as far")
    break;
    case 'horse':
        console.log("the horse or the knight move like a L in the table")
    break;
    case 'bishop':
        console.log("move in diagonally, but not backwards or sideways")
    break;
    case 'rook': 
    console.log("the rook can move forward,backward and sideways")
    break;
        default : console.log("this piece do not exist")

}