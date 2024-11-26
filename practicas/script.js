"use strict";
//
// const students = [
//   { name: "Alex", lastName: "Bauer", age: 33, gender: "male", city: "Berlin" },
//   {
//     name: "Eva",
//     lastName: "Meier",
//     age: 26,
//     gender: "female",
//     city: "Hamburg",
//   },
//   {
//     name: "Linda",
//     lastName: "Meyer",
//     age: 25,
//     gender: "female",
//     city: "Berlin",
//   },
//   {
//     name: "Max",
//     lastName: "Mustermann",
//     age: 18,
//     gender: "male",
//     city: "Hamburg",
//   },
//   { name: "John", lastName: "Doe", age: 21, gender: "male", city: "Hessen" },
//   {
//     name: "Jill",
//     lastName: "Smith",
//     age: 19,
//     gender: "female",
//     city: "Dortmund",
//   },
//   {
//     name: "Andreas",
//     lastName: "Mueller",
//     age: 39,
//     gender: "male",
//     city: "Berlin",
//   },
// ];
//
// forEach
// const studentsName = [];
//
// students.forEach((student) => {
//   studentsName.push(student.name);
// })
//
// console.log(studentsName);
//
//
// const fullName = students.map((student) => {
//   return {
//     ...student,
//     fullName: student.name + ' ' + student.lastName,
//   }
// });
//
// const years_to_retire = fullName.map((student) => {
//   return {
//     ...student,
//     yearsToRetire: 65 - student.age
//   }
// });
//
// console.log(years_to_retire);
//
// const ageOlder = students.filter((student) => {
//   return student.age > 25
// }).filter((student) => {
//   return student.city === 'Berlin';
// });
//
//
// const account = {
//   number: "0323443254216532",
//   amount: 0,
//   deposit(amount) {
//     return (this.amount += amount);
//   },
//   withdraw(amount) {
//     return (this.amount -= amount);
//   },
// };
//
// account.deposit(100);
// account.withdraw(50);
// console.log(account.amount);

const user = {
  name: "Alex",
  lastName: "Bauer",
  age: 33,
  gender: "male",
  city: "Berlin",
  showFullName() {
    return this.name + " " + this.lastName;
  },
};

// Objects Constructor

function Person() {
  this.name = "";
  this.lastName = "";
  this.age = 0;
  this.gender = "";
  this.city = "";
  this.showFullName = function () {
    return this.name + " " + this.lastName;
  };
}

const user2 = new Person();

user2.name = "John";
user2.lastName = "Doe";
user2.age = 21;
user2.gender = "male";
user2.city = "Hessen";

console.log(user2);
console.log(user2.showFullName());
