const students = [
    {id: 1, name: 'Jaber',  marks: 95},
    {id: 2, name: 'Tahmid',  marks: 55},
    {id: 3, name: 'Babor',  marks: 85},
    {id: 4, name: 'Jubayer',  marks: 45}
]

const names = students.map(student => student.name);

console.log(names);
