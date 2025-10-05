const numbers = [12, 45, 78, 65];
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(12, 45, 78, 654);
const max = Math.max(...numbers)
// console.log(max);


const first = [1, 2, 3, 4, 5];
const second = [...first];
second.push(6)
const third = [...second, 10, 60];

// console.log(first);
// console.log(second);
// console.log(third);


const ages = [14, 18, 22];
const prices = [180, 550, 450];
const all = [...ages, 5555555, ...prices]
// console.log(all);


const person = {name: 'Jubayer', age: 18};
const employee = {designation: 'dev', ...person};

console.log(employee);
