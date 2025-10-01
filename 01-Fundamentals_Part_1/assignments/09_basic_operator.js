// Basic Operators
// 1) If your country split in half, and each half would contain half the population, then how many people would live in each half?

// 2) Increase the population of your country by 1 and log the result to the console.

// 3) Finland has a population of 6 million. Does your country have more people than Finland?

// 4) The average population of a country is 33 million people. Does you country have less people than the average country?

// 5) Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

const country = "India";
const continent = "Asia";
let population = 1600;
const isIsland = false;
let language = "Hindi";

let halfPopulation = population / 2;
console.log(halfPopulation);

console.log("Before Inc : " + population);
population++;
console.log("After Inc : " + population);

let finlandPopulation = 6;
console.log(
  "Does your country have more people than Finland?\nans: " +
    (population > finlandPopulation)
);
let avgPopulation = 33;
console.log(
  "Does your country have more less people than average Country?\nans: " +
    (avgPopulation > population)
);

// console.log(
//   country +
//     " is in " +
//     continent +
//     ", and its " +
//     population +
//     " people speak " +
//     language +
//     "."
// );

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

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
