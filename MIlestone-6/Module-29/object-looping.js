// Array Looping
const numbers = [12, 24, 36, 48];
for(const num of numbers){
    // console.log(num);
}

// Object Looping

const student = {
    name: 'Jubayer', 
    roomNo: 301,
    subject: 'physics',
    id: 183107
}

for(const key in student){
    const value = student[key];
    console.log(key, value); 
}


// Prompt: give me the most common ES6 features in JS