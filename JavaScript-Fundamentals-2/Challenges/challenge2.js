/* challenge 2 */

const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return (bill * 15) / 100;
    } else {
        return (bill * 20) / 100;
    }
}

let bills = [125, 555, 44];
let tips = [];

bills.forEach(element => {
    const billResult = calcTip(element);
    tips.push(billResult);
})
console.log(tips);