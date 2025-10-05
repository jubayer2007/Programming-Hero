const student = {
    name: 'Jaber',
    1: 15,
    marks: 97
}

/****  dot notation ****/
const studentName = student.name;
// console.log(studentName);

/**** bracket notation ****/
const studentNameTwo = student['name'];
// console.log(studentNameTwo);




/**** You have to use square bracket notation When- ****/

// Case-1:
const ob1 = {
    1: 'One',
    7: 'Seven'
}

// console.log(ob.1);  // SyntaxError
console.log(ob1[7]);

// Case-2:
const ob2 ={
    'This is One': 1,
    'This is Seven': 7
}
// console.log(ob2.This is One);   // SyntaxError
// console.log(ob2["This is Seven"]);


/* Accessing their property using dot notation--*/

// 1. Object.123;  // SyntaxError
// 1. Object.123name;  // SyntaxError
// 1. Object.name123;  // SyntaxError
// 1. Object.$name;  // $ sign
// 1. Object.name-123;  // SyntaxError
// 1. Object.'name-123';  // SyntaxError
// 1. Object.Name';  // Upper Case
// 1. Object.name';  // Lower Case






