const numbers = [1, 2, 3, 4];

// forEach -> শুধু কাজ করে, কিছু return করে না
numbers.forEach(num => {
    console.log(num * 2); 
});
// Output: 2, 4, 6, 8
// return value: undefined

// map -> নতুন array return করে
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8]
