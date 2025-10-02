// The while Loop
// 1)Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// 2)Reflect on what solution you like better for this task: the for loop or the while loop?
const worldPopulation = 7900;
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
const populations = [10, 1441, 1600, 332];
// console.log(populations.length === 4);

const percentage1 = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

const percentage2 = [];
for (let i = 0; i < populations.length; i++) {
  // percentage2[i] = percentageOfWorld(populations[i]);
  percentage2.push(percentageOfWorld(populations[i]));
}

const percentage3 = [];
let i = 0;
while (i < populations.length) {
  percentage3.push(percentageOfWorld(populations[i]));
  i++;
}
console.log("Manual :" + percentage1);
console.log("for loop :" + percentage2);
console.log("while loop :" + percentage3);
