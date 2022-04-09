theGreatestNumPrime(50)

function theGreatestNumPrime(entrada) {
    let numsInArray = [];
    let greatest;
    for( let num = 2; num <=entrada;num++) {
        let ehprimo=true;
        for(let div = 2; div < num; div++) {
            if( num%div === 0) {
                ehprimo=false;
                break;
            }
        }
    if(ehprimo) {
        numsInArray.push(num);
    } 
    greatest = numsInArray[0] ;
    for(let i = 0; i<numsInArray.length; i++) {
        if( numsInArray[i]>greatest) {
            greatest = numsInArray[i];
        }
        
    }
    
    }
    console.log(greatest);
}


    
    

