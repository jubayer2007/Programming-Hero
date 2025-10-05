const employee = {
    name: 'Jubayer',
    designation: 'dev',
    salary: 20000,
    age: 18,
    experience: 1
}

Object.seal(employee); // seal korle nicher shob kiso kora jabe mane modify kora jabe kinto kono kiso delete kora jabe na

employee.salary = employee.salary + 5000;  // change an element
delete employee.salary; // delete an element 
employee.location = 'Dhaka';   // add an element
 
console.log(employee);
