// Strings and Template Literals
// 1) Recreate the description variable from the last assignment, this time using the template literal syntax.

const country = "India";
const continent = "Asia";
let population = 1600;
const isIsland = false;
let language = "Hindi";

let halfPopulation = population / 2;

const description1 = `${country} is in ${continent}, and its ${population} million people mostly speak ${language}.`;

console.log(description1);

//continent = "Europe"; //show error-->TypeError: Assignment to constant variable.
// console.log(country);
// console.log(continent);
// console.log(population);

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof continent);
