/*Optional Chain */

const student = {
    name: 'Jubayer',
    age: 18,
    school: 'Annada Govt. High School',
    // father:{
    //     name:'Mosa Miah',
    //     age: 52, 
    //     Ocopation: 'Teacher'
    // },
    
    mother:{
        name: 'Hazara Khatun',
        age: 50,
        Ocopation: 'Teacher'
    }
}

console.log(student.father?.name);
 // This is called optional Chain
