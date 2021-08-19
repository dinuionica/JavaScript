/* challenge2 */

/* store values */
let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76;

/* calculate bmi */
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIJohn > BMIMark) {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})`);
} else {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})`);
}