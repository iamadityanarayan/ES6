let person = {
  name:'Adityanarayan Tiwari',
  age: 25,
  city: 'Hyderabad'
};

let empolyee = {
  ...person,
  salary: 50000,
  postion:'Software Engineer',
  email:'aditya@gmail.com'
}

console.log(person)
console.log(empolyee)