const numbers = [2, 8, 5, 65, 56, 98, 99];

const greaterThan10 = numbers.filter(x => x > 10);
const evenNumbers = numbers.filter(x => x % 2 === 0);

console.log(evenNumbers);
console.log(greaterThan10);
