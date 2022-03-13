const array = ["Hello", "World", "Hi", "ES6"];
console.log(array);

// Destructured Array
const [Hello, World, Hi, ES6] = ["Hello", "World", "Hi", "ES6"];
console.log(Hello + " " + World);

const [{name}, player2] = [{name:'Aditya'},{name:'Shubham'}];
console.log(name)
console.log(player2)