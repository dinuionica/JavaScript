/* challenge 3 */

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoals = (88 + 91 + 110) / 3;

if (scoreKoals == scoreDolphins) {
    console.log("DRAW!yey\n");
} else if (scoreKoals > scoreDolphins) {
    console.log("Koalas Team wins!");
} else {
    console.log("Dolphins Team wins!");
}

/* bonus 1 */

if (scoreKoals == scoreDolphins) {
    console.log("DRAW!yey\n");
} else if (scoreKoals > scoreDolphins && scoreKoals > 100) {
    console.log("Koalas Team wins!");
} else if (scoreKoals < scoreDolphins && scoreDolphins > 100) {
    console.log("Dolphins Team wins!");
}

/* bonus 3 */

if (scoreKoals == scoreDolphins && scoreKoals > 100 && scoreDolphins > 100) {
    console.log("DRAW!yey\n");
} 