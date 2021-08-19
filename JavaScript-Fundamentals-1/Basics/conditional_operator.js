/* the conditional operator */

let age = 18;
age >= 18 ? console.log("I'll drink wine!") : console.log("I'll drink water");


/* the conditional operator is an expression and can be use in template literals */
let drink = age >= 18 ? "wine ": "water";
console.log(drink);