"use strict";

/* 
[20, 21, 40, 38]

understandin problem with another example 
=> 20 in 1 days,
=> 21 in 2 days,
=> 40 in 3 days,
=> 38 in four days 

to do 
-> use a for and prin array element and index

*/

const temperatures = [17, 21, 23];

for (let i = 0; i < temperatures.length; ++i) {
  console.log(temperatures[i] + " in " + (i + 1) + " days!");
}
