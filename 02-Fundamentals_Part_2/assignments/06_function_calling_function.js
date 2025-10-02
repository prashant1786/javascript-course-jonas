/*
Functions Calling Other Functions﻿
1)Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

2)To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

3)Call describePopulation with data for 3 countries of your choice.

*/
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

const describePopulation = (country, population) => {
  console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld1(
      population
    )}% of the world`
  );
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);
