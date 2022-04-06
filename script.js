function greatestOfThree( elementA,elementB,elementC) {
  if ( elementA>elementB && elementA>elementC) {
      return elementA
  }
  else if (elementB>elementA && elementB>elementC) {
      return elementB
  } else {
      return elementC
  }
    
    
}

console.log(greatestOfThree(75,48,60))