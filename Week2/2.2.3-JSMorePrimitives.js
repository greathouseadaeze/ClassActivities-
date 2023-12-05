// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "night";
// Create a variable "greeting" that references a template literal
let greeting = `Good ${timeOfDay}`;
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"

// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVariable;
// Print the new variable and its type
console.log(newVariable);
console.log(typeof newVariable);
// What type should we expect?
// undefined
// Assign the variable a value that indicates the variable is purposely blank
let variable = null;
// What value should we assign?
// null
// Print the variable and its type again
console.log(variable);
console.log(typeof variable);
// What type should we expect?
// null
// Try to print a variable that does not exist
console.log(thisVariableDoesntExist);
// What should we expect to print in the CLI?
// undefined
// Print "greeting" again
console.log(greeting);
// Will this line run?
// no
