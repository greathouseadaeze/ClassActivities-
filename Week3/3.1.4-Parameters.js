// Named Parameters
// write a function that takes two named parameters:
function namedParams(name, age) {
  // print each named parameter,
  console.log(name, age);
  // then return the parameters added together
  return name + age;
}
// invoke the function and pass in two numbers
namedParams(6, 6);
// invoke the function and pass in more than two numbers
namedParams(6, 6, 6, 6);
// invoke the function and pass in only one number
namedParams(6);
// change the function to set default values for the parameters
function namedParamsDefaults(name = "Adaeze", age = 6) {
  console.log(name, age);
  return name + age;
}
// again, invoke the function and pass in only one number
namedParamsDefaults(6);
// Rest Operator
// add a rest operator to the function's parameters
function namedParamsRest(name, age, ...favoriteFoods) {
  console.log(name, age, favoriteFoods);
  return name + age;
}
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
namedParamsRest(6, 6, 20, 25, 26, 35, 40);
