/* challenge 1 */

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

let avgDolhins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= avgKoalas * 2) {
        console.log(`Dolhins (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolhins * 2){
        console.log(`Koals (${avgKoalas} vs ${avgDolhins})`);
    }
}

checkWinner(avgDolhins, avgKoalas);
