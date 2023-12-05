const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let removeZero = nums.pop();
let removeOne = nums.pop();
console.log(removeZero);
console.log(removeOne);
// remove each of the first two items with shift(), saving each item to a variable
let removeSix = nums.shift();
let removeFive = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
console.log(nums);
nums.push(removeOne, removeZero);
console.log(nums);
