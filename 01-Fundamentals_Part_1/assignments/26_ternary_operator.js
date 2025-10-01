//The Conditional (Ternary) Operator

/*
1)If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

2)After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/
const country = "India";
const continent = "Asia";
// let population = 1600;
let population = 13;

const isIsland = false;
// const isIsland = true;
let language = "hindi";
// let language = "english";

let halfPopulation = population / 2;
let finlandPopulation = 6;
let avgPopulation = 33;

let aboveAvgPopulation =
  population > avgPopulation
    ? `${country}'s population is above average.`
    : `${country}'s population is below average.`;
console.log(aboveAvgPopulation);
