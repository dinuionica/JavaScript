/* conditios */

let isStudent = true;

if (isStudent === true) { // if (isStudent)
    console.log("This boy is a student!");
} else {
    console.log("This boy isn't a student!");

}

/* 
== => make type conversion
=== => 100%
*/

let number = '10';

if (number == 10) {
    console.log("True");
} 
if (number === 10) {
    console.log("True");
}

/* if else and else if */
let number = 10;

if (number > 0) {
    console.log("Positive numbers");   
} else if (number > 0 && number % 2 == 0) {
    console.log("Positive even numbers");
} else {
    console.log("Negative numbers");
}