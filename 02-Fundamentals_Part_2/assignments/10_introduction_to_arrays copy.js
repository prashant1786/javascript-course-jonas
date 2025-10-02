/* 
Introduction to Arrays
1)Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

2)Log to the console whether the array has 4 elements or not (true or false).

3)Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

 */
const worldPopulation = 7900;
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
const populations = [10, 1441, 1600, 332];
console.log(populations.length === 4);

// const percPortugal = percentageOfWorld(populations[0]);
// const percChina = percentageOfWorld(populations[1]);
// const percIndia = percentageOfWorld(populations[2]);
// const percUSA = percentageOfWorld(populations[3]);

// console.log(percPortugal);
// console.log(percChina);
// console.log(percIndia);
// console.log(percUSA);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
