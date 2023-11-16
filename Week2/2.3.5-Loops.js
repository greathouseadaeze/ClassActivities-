// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let currentNum = 1;
// 2) create a variable to represent the current total
let currentTotal = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (currentNum <= 100) {
  currentTotal = currentTotal + currentNum;
  currentNum++;
}
console.log(currentTotal);

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
let total = 0;
for (let i = 1; i <= 100; i++) {
  total = i + total;
  console.log(total);
}
console.log(total);
