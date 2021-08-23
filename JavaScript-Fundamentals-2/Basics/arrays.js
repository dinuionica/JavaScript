/* arrays - data structure */

/* declaration */
let friends = ['Ionica', 'Sergiu', 'Rares'];

/* iteration */
for (let i = 0; i < 3; ++i) {
    console.log(friends[i]);
}
console.log("---------------");
friends.forEach(element => {
    console.log(element);
})

/* acces / change an element */
/* first element */
friends[0] = "Alex";

/* last element */
friends[friends.length - 1] = "Iulian";

friends.forEach(element => {
    console.log(element);
})
