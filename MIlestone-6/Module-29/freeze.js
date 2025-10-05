const employee = {
    name: 'Jubayer',
    designation: 'dev',
    salary: 20000,
    age: 18,
    experience: 1
}

Object.freeze(employee); // freeze korle nicher kono kiso kaj korbe na

employee.salary = employee.salary + 5000;  // change an element
delete employee.salary; // delete an element 
employee.location = 'Dhaka';   // add an element
 
console.log(employee);
