/*
Arrow Functions﻿
1)Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

*/

//Function Declaration
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
// console.log(percPortugal1);
// console.log(percChina1);
// console.log(percUSA1);

//Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal2 = percentageOfWorld2(10);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);
// console.log(percPortugal2);
// console.log(percChina2);
// console.log(percUSA2);

// Arrow Function
const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percentageOfWorld3 = (population)=>{return (population / 7900) * 100;};
// const percentageOfWorld3 = population=>{return (population / 7900) * 100;};

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3);
console.log(percChina3);
console.log(percUSA3);
