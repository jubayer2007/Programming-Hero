/**
 * Class ---> template
 * 1. Properties
 * 2. Method (a special type of function inside a class without the function keyword)
 * 
 * 
 * object
 */

// How to declare a class
class Player {
    goal(){
        console.log('Score a goal');
    }
    getTeamName(){
        return 'Bangladesh'; 
    }
}

// Creat a New Object
const player1 = new Player()
player1.goal()
console.log(player1);


