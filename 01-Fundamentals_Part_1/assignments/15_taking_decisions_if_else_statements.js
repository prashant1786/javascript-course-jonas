// Taking Decisions: if / else Statements
// 1) If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
// 2) After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
const country = "India";
const continent = "Asia";
let population = 1600;
const isIsland = false;
let language = "Hindi";

let halfPopulation = population / 2;
let finlandPopulation = 6;
let avgPopulation = 33;

if (population > avgPopulation) {
  console.log(`${country}'s population is Above average.`);
} else {
  console.log(
    `${country}'s population is ${
      avgPopulation - population
    } million below average.`
  );
}
