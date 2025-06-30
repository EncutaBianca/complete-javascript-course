'use strict';

// const name = 'Bianca';

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();
// console.log(x);

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age} y/o, born in ${birthYear}.`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }

//   return printAge();
// }

// const firstName = 'Bianca';
// calcAge(1996);

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1997);

// var firstName = 'Matilda';

const bianca = {
  firstName: 'Bianca',
  year: 1994,
  calcAge: function () {
    console.log(2025 - this.year);
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    const isMillenial = () =>
      console.log(this.year >= 1981 && this.year <= 1996);
    isMillenial();
  },
  //   greet: () => console.log(`Hey, ${this.firstName}`),
  greet: function () {
    console.log(`Hey, ${this.firstName}`);
  },
};

bianca.calcAge();
bianca.greet();

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
//Shallow vs Deep copies of objects

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica, 'Davis');

// marriedJessica.lastName = 'Davis';
// marriedJessica.age = 34;
console.log('Before: ', jessica);
console.log('After: ', marriedJessica);

//SHALLOW COPY
const alberta = {
  firstName: 'Alberta',
  lastName: 'Johnson',
  age: 21,
  family: ['Alice', 'Noah', 'Daniel'],
};

const albertaCopy = { ...alberta };
alberta.lastName = 'Manson';
console.log(alberta);
console.log(albertaCopy);

// DEEP COPY
const jessica1 = structuredClone(jessica);
jessica.location = 'New Jersey';
jessica1.location = 'San Francisco';
console.log(jessica, jessica1);
