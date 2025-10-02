function sumOfNumbers(Num1 = 0, Num2 = 0) {
    const total = Num1 + Num2;
    console.log(total);
    
}
sumOfNumbers(20)

function multiply(Num1 = 1, Num2 = 1) {
    const result = Num1 * Num2;
    console.log(result);
}
multiply(50, 6)

function fullName(first = '', last = '') {
    const name = first + ' ' + last;
    console.log(name);
    
}
fullName('Mohammad', 'Jubayer')