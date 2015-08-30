var price = 3; 

function calc(count) {
    var result = price * count;
    var price = 4;
    return result;
}


function otherCalc(count) {
    let result = price * count;
    //let price = 4;
    return result;
}


var p = calc(10);
var q = otherCalc(10);
