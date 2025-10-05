const students = [
    {id: 1, name: 'Jaber',  marks: 95},
    {id: 2, name: 'Tahmid',  marks: 55},
    {id: 3, name: 'Nowshad',  marks: 85},
    {id: 4, name: 'Jubayer',  marks: 45}
]

const names = students.map(students => students.name)[2];

console.log(names);
