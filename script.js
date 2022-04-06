console.log(triangle(50,180,150))
function triangle(angleA,angleB,angleC) {
    let result = angleA + angleB + angleC === 360 ? true : false;
    return result
}
