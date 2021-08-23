/* assignment 3 */

let worldPopulation = 7900;

/* arrow function */
const percentageOfWorld = population => {
    return (population / worldPopulation) * 100;
}

const percentageChina = percentageOfWorld(1441);
console.log(percentageChina);


