function sum (a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return a + b;
};

function diff (a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return a - b;
};

function production (a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return a * b;
};

function quotient (a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return a/b;
}

let num1 = prompt('Enter first number');
let num2 = prompt('Enter second number');


console.log(`${num1} + ${num2} = ${sum(num1,num2)}`);
console.log(`${num1} - ${num2} = ${diff(num1,num2)}`);
console.log(`${num1} / ${num2} = ${quotient(num1,num2)}`);
console.log(`${num1} * ${num2} = ${production(num1,num2)}`);


var text = "this is a string";
let num = 2;
var list = ['this','is','an','array'];
var obj = {'description':'this is an object'};

console.log(num === 2);
console.log(num>1);
console.log(num !== 1);
