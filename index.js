function add(a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

let n = 10;
function increment(n) {
    return n += 1;
}
function decrement(n) {
    return n -= 1;
}
increment();
decrement();

let string = "123.111";
function preserveDecimal(string){
    return parseFloat(string, 10);
}

function makeInt(string){
    return parseInt(string, 10);
}


