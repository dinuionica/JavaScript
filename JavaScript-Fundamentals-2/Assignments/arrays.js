/* assignment 4 */

let populations = [1441, 2000, 4000, 6788];

if (populations.length == 4) {
    console.log('True');
} else {
    console.log('False');
}

let worldPopulation = 7900;

/* arrow function */
const percentageOfWorld = population => {
    return (population / worldPopulation) * 100;
}

let percentage = [];
populations.forEach(element => {
    const resultPercentage = percentageOfWorld(element);
    percentage.push(resultPercentage);
})

percentage.forEach(element => {
    console.log(element);
})