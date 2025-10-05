const numbers = [4, 8, 2, 3, 5];

// const doubled = [];
// for(const num of numbers){
//     const result = num * 2;
//     doubled.push(result);
// }

// const doubledIt = x => x * 2;
// const doubled = numbers.map(doubledIt)


const doubled = numbers.map(x => x * 2)
const fiveTimes = numbers.map(num => num * 5)


console.log(doubled);
console.log(fiveTimes);


