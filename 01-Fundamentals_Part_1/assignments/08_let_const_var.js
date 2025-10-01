// let, const and var
// 1) Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// 2) Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// 3) Try to change one of the changed variables now, and observe what happens.

const country = "India";
const continent = "Asia";
let population = 1600;
const isIsland = false;
let language = "Hindi";

//continent = "Europe"; //show error-->TypeError: Assignment to constant variable.
// console.log(country);
// console.log(continent);
// console.log(population);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(typeof continent);
