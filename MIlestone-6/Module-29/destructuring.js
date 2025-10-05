// 1. Property To Variable
const {prop} = Object;

// 2. Multiple Properties
const {prop1, prop2, ..., propN} = Object;

// 3. Default Value
const {prop = 'Default'} = Object;

// 4. Alias
const {prop: myprop} = Object;

// 5. Deep Property
const {prop: {deepProp}} = Object;

// 6. Dynamic Property Name
const {[propName]: myprop} = Object;


//---------------------------------------------------

// Way-1:

const users = {
    name: 'Jubayer',
    address: 'South Tarua',
    age: 18
};

// Way-2
const {name} = users;

