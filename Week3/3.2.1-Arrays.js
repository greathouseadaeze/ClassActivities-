// create an Array using an Array literal
const names = ["Adaeze", "Tuere", "Tene"];
// access the 1st item in the Array
console.log(names[0]);
// access the last item in the Array
names[2];
// print the length of the Array
names.length;
// use the length property to access the last item in the Array
console.log(names[names.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
let aunt = ["Tracy"];

for (let name of names) {
  let output = `Random name: ${name}`;
  aunt.push(output);
  console.log(aunt);
}
