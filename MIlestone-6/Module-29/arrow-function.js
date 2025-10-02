// function declaration 
function add(Num1, Num2) {
    return Num1 + Num2;
}

// function expression 
const addition = function(Num1, Num2) {
    return Num1 + Num2;
}
const result = addition(17, 13);
console.log(result);

// arrow function

const add2 = (Num1, Num2) => Num1 + Num2;
const results = add2(20, 20);
console.log(results);

// Multi line arrow function 

const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    console.log(result);
}

doMath(5, 5);