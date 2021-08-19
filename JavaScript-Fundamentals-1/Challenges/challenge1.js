/* body mass index */

/* store values */
let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76;

/* calculate bmi */
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

/* check bmi */
let markHeigherBMI = BMIMark > BMIJohn;
console.log(markHeigherBMI);