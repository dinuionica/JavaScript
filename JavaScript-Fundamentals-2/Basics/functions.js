'use strict'
/* functions */

/* funtion declaration */
function sayHello() {
    console.log("Hello my friend!");
}

/* calling the function */
sayHello();

/* a function with arguments / parametres */
function addTwoNumbers(number1, number2) {
    const result = number1 + number2;
    return result;
}

const sumNumbers = addTwoNumbers(1, 2);
console.log(sumNumbers);

const sumNumbers2 = addTwoNumbers(10, 222);
console.log(sumNumbers2);
