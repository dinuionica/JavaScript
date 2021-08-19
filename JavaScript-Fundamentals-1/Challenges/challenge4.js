/* challenge 4 */

/* calculate the tip */
let bill = 275.40;
let tip;

if (bill >= 50 && bill < 300) {
    tip = (15 * bill) / 100;
} else {
    tip = (20 * bill) / 100;
}

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);